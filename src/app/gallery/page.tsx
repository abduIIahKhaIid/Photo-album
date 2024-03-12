"use server"
import CloudinaryImage from '@/app/gallery/cloudinary-image';
import UploadButton from '@/app/gallery/uploading-button';
import cloudinary from "cloudinary";

export type SearchResult = {
    public_id: string;
    tags: string[];
};

export default async function Gallery() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image ')
        .sort_by('created_at', 'desc')
        .with_field('tags')
        .max_results(4)
        .execute()) as { resources: SearchResult[] };
    return (
        <section>
            <div className="flex flex-col gap-8">
                <div className='flex justify-between'>
                    <h1 className="text-4xl font-bold">
                        Gallery
                    </h1>
                    <UploadButton />
                </div>
                <div className='grid grid-cols-4 gap-5'>
                    {results.resources.map((result) => (
                        <CloudinaryImage
                            key={result.public_id}
                            imageData={result}
                            path='/gallery'
                            width="400"
                            height="400"
                            alt="an image of something"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
