import {
  Card,
} from "@/components/ui/card"


export default function RouteAwardCard({ award, text }) {

  return ( 
    <Card className="py-4 px-4 m-2 max-w-[350px]">
        <h1 className="font-bold">{award}</h1>
      <h2 className="font-bold">{text.replace("?", "")}</h2>
    </Card>
  );
}
