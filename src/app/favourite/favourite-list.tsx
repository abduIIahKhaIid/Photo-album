import CloudinaryImage from '@/app/gallery/cloudinary-image';
import cloudinary from "cloudinary";
import { SearchResult } from '../gallery/page';
import ForceRefresh from '@/components/force-refresh';
import { useState } from 'react';


export default async function FavoritesPage({ initialResources, }: { initialResources: SearchResult[]; }) {
    const [resources, setResources] = useState(initialResources);
    return (
        <section>
            <ForceRefresh />
            <div className='grid grid-cols-4 gap-5'>
                {resources.map((result) => (
                    <CloudinaryImage
                        key={result.public_id}
                        imageData={result}
                        path="/favourite"
                        width="400"
                        height="400"
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
                ))}
            </div>
        </section>
    );
}
