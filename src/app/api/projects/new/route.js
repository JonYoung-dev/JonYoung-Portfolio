import { auth0 } from "@/lib/auth0";
import { insertProject } from "@/lib/db";

export async function POST(req) {
  const session = await auth0.getSession();
  if (!session) {
    return Response.json(
      { ok: false, error: "Unauthorized" },
      { status: 401 }
    );
  }
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const description = formData.get("description");
    const img = formData.get("img");
    const link = formData.get("link");
    const keywords = formData.get("keywords");
 
    insertProject({ title, description, img, link, keywords });

    return Response.json(
      { ok: true, project: { title, description, img, link, keywords } },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return Response.json(
      { ok: false, error: "Invalid payload" },
      { status: 400 }
    );
  }
};