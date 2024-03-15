"use client"
import { toast } from "sonner";

export default function Success() {
    const currentDate = new Date();
    return (
        toast("Album has been created successfully", {
            description: `${currentDate}`,
        })
    )
}