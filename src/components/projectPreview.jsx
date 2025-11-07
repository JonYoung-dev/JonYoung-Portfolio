import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
const myProjects = [
  {
    title: "Weather Dashboard",
    desc: "A web app that displays current weather and forecasts using the OpenWeatherMap API.",
    img: "https://cataas.com/cat/says/Weather%20Dashboard?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  },
  {
    title: "Task Tracker",
    desc: "A simple productivity tool for creating, organizing, and tracking daily tasks.",
    img: "https://cataas.com/cat/says/Task%20Tracker?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  },
  {
    title: "Portfolio Website",
    desc: "A responsive personal portfolio showcasing projects and experience.",
    img: "https://cataas.com/cat/says/Portfolio%20Website?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  },
  {
    title: "Recipe Finder",
    desc: "Search recipes by ingredients and get nutritional information using a public API.",
    img: "https://cataas.com/cat/says/Recipe%20Finder?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  },
  {
    title: "Expense Tracker",
    desc: "A finance app that helps users log, categorize, and visualize expenses over time.",
    img: "https://cataas.com/cat/says/Expense%20Tracker?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  },
  {
    title: "Chat App",
    desc: "A real-time chat application built with WebSockets and a Node.js backend.",
    img: "https://cataas.com/cat/says/Chat%20App?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  },
  {
    title: "E-commerce Store",
    desc: "A mock online shop with product listings, cart functionality, and checkout flow.",
    img: "https://cataas.com/cat/says/E-commerce%20Store?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  },
  {
    title: "Image Gallery",
    desc: "A gallery app with infinite scroll and search powered by the Unsplash API.",
    img: "https://cataas.com/cat/says/Image%20Gallery?width=300&height=200&fontSize=24&color=white",
    link: "https://cataas.com"
  }
];


// takes in an array of proejcts as a prop

export function ProjectPreviewer({ className = "", projects = myProjects }) {
  return (
    <div className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6 my-10 ${className}`}>
      {projects.map((project, i) => (
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
