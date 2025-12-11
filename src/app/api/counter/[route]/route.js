// middleware route for every single route to upsert information regarding route hits
// create db.js entry for this
import { trackPageView } from "@/lib/db";

export function GET() {
  return new Response("Method Not Allowed", { status: 405 });
}

// Main POST handler
export async function POST(request, { params }) {
  const route = decodeURIComponent(params.route);
  const rows = await trackPageView(route);
  return Response.json({ ok: true, rows: rows });
}
