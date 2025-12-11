import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./button";
import { Skeleton } from "./skeleton";
import Image from "next/image"
import Link from "next/link";
import ProjectControls from "./ProjectControls";

    // title: "Project One",
    // desc: "Short blurb.",
    // img: "https://placehold.co/300.png",
    // link: "#"
    // count

export default function ProjectStatsCard({ project, slug, user }) {

  return ( 
    <Card className="py-4 px-4 m-2 max-w-[350px]">
      <h2 className="font-bold">{project.title}</h2>
      <Image src={project.img} width="300" height="300" alt="project image" />
      {/* <Skeleton className="m-[300px] h-[300px]"/> */}
      <CardDescription>
        { project.description }
      </CardDescription>
      <div className="flex gap-2">
          <Button asChild size="sm" variant="secondary" onClick={() => handleClick(project.title)}>
            <a href={project.link} target="_blank" rel="noreferrer">Open</a>
          </Button>
          <h1>
            Total Number of Visitors from site: {project.count}
            Percentage of total visitors
          </h1>

      </div>
      {user && <ProjectControls projectId={project.id} slug={slug}/>}
    </Card>
  );
}
