"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function ForceRefresh() {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.refresh()
        }, 1000)
    }, []);
    return <>
    </>;
}