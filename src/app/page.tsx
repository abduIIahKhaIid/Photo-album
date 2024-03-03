"use client";
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';

export default function Home() {
  const [ImageId, setImageId] = useState("");
  return (
    <main className="flex  flex-col items-center  p-24">
      <CldUploadButton
        onUpload={(result: any) => setImageId(result.info.public_id)}
        uploadPreset="exjqtzqj" />
      {
        ImageId &&
        <CldImage
          width="960"
          height="600"
          src={ImageId}
          sizes="100vw"
          alt="Description of my image"
        />
      }
    </main>
  )
}
