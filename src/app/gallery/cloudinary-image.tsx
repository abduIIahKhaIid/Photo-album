"use client";
import Heart from '@/components/Icons/heart';
import { CldImage } from 'next-cloudinary';
import { setAsFavoriteAction } from './action';
import { useState, useTransition } from 'react';
import { SearchResult } from './page';
import { FullHeart } from '@/components/Icons/full-heart';



export default function CloudinaryImage(props: any & {
    imageData: SearchResult; onUnheart: (
        unheartedResource: SearchResult
    ) => void
}) {
    const [transition, startTransition] = useTransition();
    const { imageData, unheartedResource } = props;
    const [isFavorite, setIsFavorited] = useState(
        imageData.tags?.includes("favorite")
    );
    return (
        <div className="relative">
            <CldImage {...props} src={imageData.public_id} />
            {isFavorite ?
                <FullHeart
                    onClick={() => {
                        setIsFavorited(false);
                        unheartedResource(imageData);
                        startTransition(() => { setAsFavoriteAction(imageData.public_id, false) })
                    }
                    }
                    className="absolute top-2 right-2 hover:text-white text-red-500 cursor-pointer" />
                :
                <Heart
                    onClick={() => {
                        setIsFavorited(true);
                        startTransition(() => { setAsFavoriteAction(imageData.public_id, true) })
                    }
                    }
                    className="absolute top-2 right-2 hover:text-red-500 cursor-pointer" />
            }
        </div>
    );
}