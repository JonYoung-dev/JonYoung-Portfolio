// middleware route for every single route to upsert information regarding route hits
// create db.js entry for this
import { trackPageView } from "@/lib/db";

// Main handler
export async function GET(request, { params }) {
    const { searchParams } = new URL(request.url);
    console.log(`api route hit with: ${searchParams.get("route")}`);
  const route = searchParams.get("route");
  const rows = await trackPageView(route);
  return Response.json({ ok: true, rows: rows });
}
