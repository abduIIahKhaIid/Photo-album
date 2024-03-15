
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Menu from "./Icons/menu"
import Addtodialogbox from "./add-to-album-dialog"
import { image } from "@cloudinary/url-gen/qualifiers/source"
import { SearchResult } from "@/app/gallery/page"

export default function ImageMenu({ image }: { image: SearchResult }) {
  return (
    <div className="absolute top-2 right-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-34">
          <DropdownMenuItem asChild>
            <Addtodialogbox image={image} />
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
