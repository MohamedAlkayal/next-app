



import React from "react";
import { formatDuration } from "@/app/utils/formatDuration";
import { formatShortDate } from "@/app/utils/formatShortDate";
import { Icon } from '@iconify/react';
import Image from "next/image";

interface EpisodeCardProps {
    collection: string;
    track: string;
    description: string;
    release: string;
    duration: string | number;
    image?: string;
    isCompact?: boolean;
}

const EpisodeListItem: React.FC<EpisodeCardProps> = ({ collection, track, release, duration, image, description, isCompact = false }) => (
    <div className="flex items-center gap-4 p-3 border-b border-white/10 cursor-pointer duration-300 hover:bg-black/20">
        <div className={`relative rounded overflow-hidden shrink-0 ${isCompact ? 'w-12 h-12' : 'w-28 h-28'}`}>
            <Image
                src={image || "/media/images/placeholder.webp"}
                alt={track || "artwork"}
                fill
                sizes={isCompact ? "48px" : "112px"}
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/media/images/placeholder.webp"
            />
        </div>
        <div className="w-full min-w-0">
            <div className="flex items-center justify-between mb-1">
                <p className="mb-0 text-white overflow-hidden whitespace-nowrap text-ellipsis">{track}</p>
                <button className="bg-transparent cursor-pointer text-white/50 hover:text-white" >
                    <Icon icon="lucide:ellipsis-vertical" />
                </button>
            </div>
            <div className={"text-sm mb-1 text-mirage-500 " + (isCompact ? ' text-xs' : '')}>{collection}</div>
            {isCompact || (
                <>
                    <div className="text-xs text-ellipsis line-clamp-2 text-white/60 mb-2">{description}</div>
                    <div className="flex gap-1 text-xs text-white/70">
                        <p>{formatShortDate(release)}</p>
                        <p>{formatDuration(+duration)}</p>
                    </div>
                </>
            )}
        </div>
    </div>
);

export default EpisodeListItem;
