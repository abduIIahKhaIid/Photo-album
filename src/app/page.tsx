"use client";
import { CldImage, CldUploadButton } from 'next-cloudinary';
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

export default function Home() {
  const [imageId, setImageId] = useState("");
  const router = useRouter();

  router.push('/gallery')

  return (
    <main className="flex flex-col items-center p-24">
      <CldUploadButton
        onUpload={(result: any) => setImageId(result.info.public_id)}
        uploadPreset="exjqtzqj" />
      {imageId &&
        <CldImage
          width="960"
          height="600"
          src={imageId}
          sizes="100vw"
          alt="Description of my image"
        />
      }
    </main>
  );
}
