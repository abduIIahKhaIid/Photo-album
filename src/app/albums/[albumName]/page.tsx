import cloudinary from "cloudinary";
import { SearchResult } from "@/app/gallery/page";
import ForceRefresh from "@/components/force-refresh";
import AlbumGrid from "./album-grid";
import { Empty } from "@/app/favorites/page";

export default async function GalleryPage({ params: { albumName }, }: { params: { albumName: string; }; }) {
    const results = (await cloudinary.v2.search
        .expression(`resource_type:image AND folder=${albumName === "samples" ? albumName : `${albumName}/samples`}`)
        .sort_by("created_at", "desc")
        .with_field("tags")
        .max_results(30)
        .execute()) as { resources: SearchResult[] };

    return (
        <section>
            <ForceRefresh />

            <div className="flex flex-col gap-8">
                <div className="flex justify-between">
                    <h1 className="text-4xl font-bold">Album {albumName}</h1>
                </div>
                {results.resources.length >= 1 ? <AlbumGrid images={results.resources} /> : <Empty />}
            </div>
        </section>
    );
}