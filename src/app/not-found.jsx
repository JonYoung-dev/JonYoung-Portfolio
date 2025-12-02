import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

export default function NotFound() {
    return (
        <div className="bg-zinc-50 max-w-2xl m-auto p-4">
            <TypographyH1>not found</TypographyH1>
            <TypographyP>Get outta here</TypographyP>
            <Button asChild size="sm" className="mt-4">
              <Link href={`/`}>Go Home</Link>
            </Button>
        </div>
    )
}