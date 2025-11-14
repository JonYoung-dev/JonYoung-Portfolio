import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { createSlug } from "@/lib/utils.js"

// takes in an array of proejcts as a prop

export async function ProjectPreviewer({ className = ""}) {
  // replace with env for hosted vs not hosted?
  const res = await fetch(`${process.env.baseurl}/api/projects`);

  const projects = await res.json();
  console.log(projects);

  return (
    <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-10 ${className}`}>
      {projects.projects.map((project, i) => (
        <Card key={i} className="flex flex-col justify-between shadow-md">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.desc}</CardDescription>
          </CardHeader>

          <CardContent>
            {project.img ? ( 
                <Image src={project.img} alt={project.link} height="200" width="300" className="mb-5 rounded-md"/>
            ) : (
              <Skeleton className="w-full h-40 mb-4 rounded-md" />
            )}

            <Button asChild className="w-full">
              <a href={`/projects/${createSlug(project.title)}`}>
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
