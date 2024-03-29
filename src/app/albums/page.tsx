import cloudinary from "cloudinary";
import AlbumCard from "./album-card";
import { Empty } from "../favorites/page";

export type Folder = { name: string; path: string };

export const dynamic = 'force-dynamic'

export default async function AlbumsPage() {
    const { folders } = (await cloudinary.v2.api.root_folders()) as { folders: Folder[]; };

    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Albums</h1>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {folders.length >= 1 ? folders.map((folder) => (
                        <AlbumCard key={folder.path} folder={folder} />
                    )) : <Empty />}
                </div>
            </div>
        </section>
    );
}