import {
  Card,
  CardTitle,
  CardHeader,
  CardContent
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function RouteInfoCard({ route, wholePercent }) {

  function getProgressColor(percent) {
    if (percent >= 20) {
      return "#10B981";
    }
    return "#3B82F6";
  }

  const progressColorHex = getProgressColor(wholePercent);

  return (
    <Card className="py-4 px-4 m-2 max-w-[350px]">
      <CardHeader>
        <CardTitle>{route.route.replace("?", "")}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h1 className="text-lg font-semibold">Number of Visits</h1>
          <p>{route.count}</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold mb-2">Percentage of Total Visits</h1>
          <div className="flex items-center gap-4">
            <Progress
              value={wholePercent}
              className="max-w-[300px] h-3 bg-gray-200" 
              style={{ '--primary': progressColorHex }}
            />
            <p className="text-sm font-medium w-10 text-right">
              {wholePercent + "%"}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}