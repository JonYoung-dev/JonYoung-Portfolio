import ProjectPreviewCard from "@/components/ProjectPreviewCard";

export default async function ProjectsPage() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center">
      <h1>Jonathans Projects</h1>
      <ProjectPreviewCard />
    </div>
  );
}
