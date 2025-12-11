// middleware route for every single route to upsert information regarding route hits
// create db.js entry for this
import { getPageViewData } from "@/lib/db";

// Main handler
export async function GET(request, { params }) {
  const rows = await getPageViewData(route);
  return Response.json({ ok: true, rows: rows });
}
