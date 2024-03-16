import cloudinary from "cloudinary";
import FavoritesList from "./favorites-list";
import { SearchResult } from "../gallery/page";
import ForceRefresh from "@/components/force-refresh";
import EmptyIcon from "@/components/Icons/empty";


export function Empty() {
  return (
    <div className="flex justify-center items-center">
      <EmptyIcon />
      <h2>Not Found</h2>
    </div>
  );
}

export default async function FavoritesPage() {
  const results = (await cloudinary.v2.search
    .expression("resource_type:image AND tags=favorite")
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: SearchResult[] };

  return (
    <section>
      <ForceRefresh />
      <div className="flex flex-col gap-8">
        <div className="flex justify-between">
          <h1 className="text-4xl font-bold">Favorite Images</h1>
        </div>
        {(results.resources.length) >= 1 ? <FavoritesList initialResources={results.resources} /> : <Empty />}
      </div>
    </section>
  );
}
