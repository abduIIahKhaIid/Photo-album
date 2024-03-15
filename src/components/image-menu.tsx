
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./Icons/menu"
import Addtodialogbox from "./add-to-album-dialog"
import { SearchResult } from "@/app/gallery/page"
import { useState } from "react"

export default function ImageMenu({ image }: { image: SearchResult }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-34">
          <DropdownMenuItem asChild >
            <Addtodialogbox image={image} onClose={() => setOpen(false)}/>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
