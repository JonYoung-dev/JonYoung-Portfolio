// page to render stored statistics

"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { toast } from "sonner";
import ProjectStatsCard from "@/components/ui/RoutesCard";
import RouteInfoCard from "@/components/ui/routeInfoCard";
import RouteAwardCard from "@/components/ui/routeAwardCard";

export default function StatPage() {
  const { user, error, isLoading } = useUser();
  const [statsData, setStatsData] = useState({});
  const [mostVisited, setMostVisited] = useState({});
  const [] = useState({});
  useEffect(() => { if (error) toast.error(error.message); }, [error]);
  useEffect(() => {
                const getStats = async () => {
                  try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/counter`, { cache: "no-store" });
                    const data = await res.json();
                    
                    if (Array.isArray(data)) {
                      setStatsData(data);
                      const most = statsData.reduce((accum, currentVal) => {
                        if (currentVal.count > accum.count) {
                          return currentVal;
                        } else {
                          return accum;
                        }
                      })
                      setMostVisited(most);
                    } else {
                      setStatsData([]);
                    }
                  } catch (e) {
                    setStatsData([]);
                    console.error("Failed to load projects", e);
                  }
                }
                getStats().then(() => {
                  
                });

              }, []);

  if (error) redirect("/auth/login");


  return (
        <div className="flex items-center justify-center flex-wrap max-w-full m-auto">
        <div>
          <RouteAwardCard Award={"most visited route"} text={mostVisited}/>
        </div>
        {Array.isArray(projects) && projects.map((p) => {
            const slug = createSlug(p.title);
            return (
              <RouteInfoCard />
            );
        })}
        </div>
  );
}
