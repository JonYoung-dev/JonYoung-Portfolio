"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { toast } from "sonner";
import RouteInfoCard from "@/components/ui/routeInfoCard";
import RouteAwardCard from "@/components/ui/routeAwardCard";

export default function StatPage() {
  const { user, error, isLoading } = useUser();

  const [statsData, setStatsData] = useState([]);
  const [mostVisited, setMostVisited] = useState(null);
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
    if (error) toast.error(error.message);
  }, [error]);

  useEffect(() => {
    const getStats = async () => {
      try {
        console.log("attempting to fetch statistics");
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/counter/retrieve`,
          { cache: "no-store" }
        );
        const data = await res.json();

        if (!Array.isArray(data)) {
          console.log("failed to fetch stats");
          setStatsData([]);
          return;
        }
        console.log("fetch stats succesful!");
        setStatsData(data);

        const most = data.reduce(
          (max, curr) => (curr.count > max.count ? curr : max),
          data[0]
        );
        setMostVisited(most);

        const sum = data.reduce((a, c) => a + c.count, 0);
        setTotalCount(sum);
      } catch (e) {
        console.error("Failed to load stats", e);
        setStatsData([]);
      }
    };

    getStats();
  }, []);

  if (error) redirect("/auth/login");

  return (
    <div>
      <div className="flex flex-col align-center mx-auto w-min">
      <h1 className="font-extrabold text-2xl w-min text-center mx-auto pt-8">Statistics</h1>
      <div className="w-[300px]">
        <RouteAwardCard
          award="most visited route"
          text={mostVisited?.route || "None yet"}
        />
      </div>
      </div>
      <div className="flex items-center justify-center flex-wrap max-w-full m-auto">
        {statsData.map((p) => {
          return (
            <RouteInfoCard
              key={p.route}
              route={p}
              wholePercent={Math.trunc((p.count / totalCount) * 100)}
            />
          );
        })}
      </div>
    </div>
  );
}
