import { Copy, FolderPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { SearchResult } from "@/app/gallery/page"
import addImageToAlbum from "./Action"

export default function Addtodialogbox({ image, onClose }: { image: SearchResult, onClose: () => void }) {
    const [albumName, setAlbumName] = useState("");
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open}
            onOpenChange={(newOpenState) => {
                setOpen(newOpenState);
                if (!newOpenState) {
                    onClose();
                }
            }}>
            <DialogTrigger asChild>
                <Button variant="secondary">
                    <FolderPlus className="mr-2 h-4 w-4" />
                    <span>Add to Album</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Add to Album</DialogTitle>
                    <DialogDescription>
                        Type an album you want to move this image into
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Album
                        </Label>
                        <Input
                            onChange={(e) => setAlbumName(e.currentTarget.value)}
                            id="album-name"
                            value={albumName}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="submit" onClick={async () => {
                            onClose();
                            setOpen(false);
                            await addImageToAlbum(image, albumName);
                        }}
                        >
                            Add to Album
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
