"use client";

import CloudinaryImage from "@/app/gallery/cloudinary-image";
import { SearchResult } from "@/app/gallery/page";
import ImageGrid from "@/components/image-grid";

export default function AlbumGrid({ images }: { images: SearchResult[] }) {
    return (
        <ImageGrid
            images={images}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width="400"
                        height="300"
                        alt="an image of something"
                    />
                );
            }}
        />
    );
}