// middleware route for every single route to upsert information regarding route hits
// create db.js entry for this
import { getPageViewData } from "@/lib/db";

// Main handler

export async function GET() {
  console.log("attempting to fetch data from db for stats");

  const rows = await getPageViewData();

  return Response.json(rows); 
}