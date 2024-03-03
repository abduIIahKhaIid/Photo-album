import CloudinaryImage from '@/Component/cloudinary-image';
import UploadButton from '@/Component/uploading-button';
import cloudinary from "cloudinary"

export type SearchResult = {
    public_id: string
}

export default async function Gallery() {
    const results = (await cloudinary.v2.search
        .expression('resource_type:image ')
        .sort_by('created_at', 'desc')
        .max_results(10)
        .execute()) as { resources: SearchResult[] }
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
                            src={result.public_id}
                            width="400"
                            height="400"
                            alt="an image of something"
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}