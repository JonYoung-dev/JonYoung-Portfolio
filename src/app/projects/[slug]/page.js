import { createSlug } from "@/lib/utils";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";
// import rest of components needed.

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const projects = await fetch(
    `${process.env.NEXT_PUBLIC_baseurl}/api/projects`
  )
    .then((res) => res.json())
    .then((data) => data.projects)
    .catch((error) => {
      console.error("Error fetching projects:", error);
      return [];
    });

  const project = projects.find((proj) => createSlug(proj.title) === slug);
  return (
    <>
      <h1>{project.title}</h1>
      {project.img ? (
        <Image
          width={125}
          height={250}
          alt={"project image"}
          className="rounded-xl my-2"
        />
      ) : (
        <Skeleton className="h-[125px] w-[250px] rounded-xl mt-5" />
      )}
      <p>{project.description}</p>
    </>
  );
}
