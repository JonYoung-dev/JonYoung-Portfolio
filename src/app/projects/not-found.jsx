"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function NotFound() {
    const { slug } = useParams();
    return (
        <Card className='flex flex-col justify-center items-center'>
            <h1>Resource Requested was not found</h1>
            <p>Could not find requested resource: {slug}</p>
            <Button variant="outline">
                <Link href="/">Home</Link>
            </Button>
        </Card>
    )
}