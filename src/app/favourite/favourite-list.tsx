"use client";
import { useEffect, useState } from "react";
import { SearchResult } from "../gallery/page";
import { CloudinaryImage } from "../../../cloudinary-photos-app/src/components/cloudinary-image";
import ImageGrid from "@/components/image-grid";


export default function FavoritesList({
    initialResources,
}: {
    initialResources: SearchResult[];
}) {
    const [resources, setResources] = useState(initialResources);

    useEffect(() => {
        setResources(initialResources);
    }, [initialResources]);

    return (
        <ImageGrid
            images={resources}
            getImage={(imageData: SearchResult) => {
                return (
                    <CloudinaryImage
                        key={imageData.public_id}
                        imageData={imageData}
                        width="400"
                        height="300"
                        alt="an image of something"
                        onUnheart={(unheartedResource: any) => {
                            setResources((currentResources) =>
                                currentResources.filter(
                                    (resource) =>
                                        resource.public_id !== unheartedResource.public_id
                                )
                            );
                        }}
                    />
                );
            }}
        />
    );
}