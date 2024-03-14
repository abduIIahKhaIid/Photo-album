"use client";
import { CldImage } from 'next-cloudinary';
import { useState, useTransition } from 'react';
import { SearchResult } from './page';
import { ForceRefresh } from '@/components/force-refresh';
import { Heart } from '@/components/Icons/heart';
import { FullHeart } from '@/components/Icons/full-heart';
import { setAsFavoriteAction } from './actions';
import ImageMenu from '@/components/image-menu';


export default function CloudinaryImage(props: any & { imageData: SearchResult }) {
    const [transition, startTransition] = useTransition();
    const { imageData, onUnheart } = props;
    const [isFavorite, setIsFavorited] = useState(
        imageData.tags?.includes("favorite")
    );
    return (
        <div className="relative">
            <ForceRefresh />
            <CldImage {...props} src={imageData.public_id} />
            {isFavorite ?
                <FullHeart
                    onClick={() => {
                        setIsFavorited(false);
                        startTransition(() => { setAsFavoriteAction(imageData.public_id, false) })
                    }
                    }
                    className="absolute top-2 left-2 hover:text-white text-red-500 cursor-pointer" />
                :
                <Heart
                    onClick={() => {
                        setIsFavorited(true);
                        startTransition(() => { setAsFavoriteAction(imageData.public_id, true) })
                    }
                    }
                    className="absolute top-2 left-2 hover:text-red-500 cursor-pointer"
                />
            }
            <ImageMenu />
        </div>
    );
}