// page to render stored statistics

"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { toast } from "sonner";

export default function StatPage() {
  const { user, error, isLoading } = useUser();
  const [statsData, setStatsData] = useState({});
  useEffect(() => { if (error) toast.error(error.message); }, [error]);
  useEffect(() => {
                const getStats = async () => {
                  try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/counter`, { cache: "no-store" });
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
              }, []);

  if (error) redirect("/auth/login");

  return (
    <div>
        
    </div>
  );
}
