import {
  Card,
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent
} from "@/components/ui/card"
import progress from "@/components/ui/progress"

export default function RouteInfoCard({ route, wholePercent }) {

  const calculateColor = (wholePercent) => {
    return wholePercent * 7;
  }

  return ( 
    <Card className="py-4 px-4 m-2 max-w-[350px]">
      <CardHeader>
        <CardTitle>{route.route}</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
        <h1>Number of Visits</h1>
        <p>{route.count}</p>
        </div>
        <div>
        <h1>Percentage of Total Visits</h1>
        <progress value={wholePercent} className={"text-green-" + calculateColor()}/>
        </div>
      </CardContent>
    </Card>
  );
}
