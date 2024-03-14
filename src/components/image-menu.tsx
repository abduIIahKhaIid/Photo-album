import { User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./Icons/menu"

export default function ImageMenu() {
    return (
        <div className="absolute top-2 right-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" className="w-8 h-8 p-0">
                        <Menu />
                    </ Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Add to Album</span>
                        <DropdownMenuSub>
                            <DropdownMenuSubContent>:xp</DropdownMenuSubContent>
                        </DropdownMenuSub>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}