import { fetchProjects } from "@/lib/db";

export async function GET() {
    const projects = await fetchProjects();
    console.log("these are my projects: " + projects)
    return Response.json({ projects });
}
