import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function MyHero() {
    return (
        <Card className="w-full border-none shadow-none bg-zinc-50">
          <h1 className="font-black text-3xl">Jonathan Young</h1>
          <CardContent>
            <Image src="/placeholder-hero-img.jpg" alt="hero image" width="2000" height="1000"/>
          </CardContent>
        </Card>
    );
}
