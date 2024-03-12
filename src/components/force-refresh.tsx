"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ForceRefresh() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.refresh()
        }, 1000)
    }, []);
    return <>
    </>;
}