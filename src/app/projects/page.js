"use client";

import { createSlug } from "@/lib/utils";
import ProjectPreviewCard from "@/components/ui/project-preview-card";
import { useUser } from "@auth0/nextjs-auth0";
import { useState, useEffect } from "react";

export default function ProjectsPage() {
  const [ projects, setProjects ] = useState([]);
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    const getSetProjects = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/projects`, { cache: "no-store" });
        const data = await res.json();
        
        if (Array.isArray(data)) {
          setProjects(data);
        } else if (data && Array.isArray(data.projects)) {
          setProjects(data.projects);
        } else {
          setProjects([]);
        }
      } catch (e) {
        setProjects([]);
        console.error("Failed to load projects", e);
      }
    }
    getSetProjects();
  }, [])

  return (
    <div className="flex items-center justify-center flex-wrap max-w-full m-auto">

    {Array.isArray(projects) && projects.map((p) => {
        const slug = createSlug(p.title);
        return (
          <ProjectPreviewCard key={slug} project={p} slug={slug} user={user}/>
        );
    })}
    </div>
  );
}