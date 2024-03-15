"use server";

import { SearchResult } from "@/app/gallery/page";
import cloudinary from "cloudinary";


export default async function addImageToAlbum(image: SearchResult, album: string) {
    const existingfolder = await cloudinary.v2.api.create_folder(album);
    let parts = image.public_id.split("/");
    if (parts.length > 1) {
        parts = parts.slice(1);
    }
    const publicId = parts.join("/");
    await cloudinary.v2.uploader.rename(image.public_id, `${album}/${image.public_id}`)
}

