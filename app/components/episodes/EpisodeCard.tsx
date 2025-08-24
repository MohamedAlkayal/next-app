



import React from "react";
import { Icon } from '@iconify/react';
import { formatDuration } from "@/app/utils/formatDuration";
import { formatShortDate } from "@/app/utils/formatShortDate";
import Image from "next/image";

interface EpisodeCardProps {
    collection: string;
    track: string;
    description: string;
    release: string;
    duration: string | number;
    image?: string;
}

const EpisodeCard: React.FC<EpisodeCardProps> = ({ collection, track, release, duration, image, description }) => (
    <div className="p-[1px] rounded bg-gradient-to-b from-white/15 to-transeparent w-full min-w-[440px] overflow-hidden">
        <div className="flex bg-mirage-800  rounded overflow-hidden">
            <div className="w-36 h-36 shrink-0 relative cursor-pointer group/episode bg-mirage-800">
                <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center opacity-0 group-hover/episode:opacity-100 transition-opacity duration-300 z-10">
                    <Icon icon="heroicons:play-16-solid" className="text-white text-6xl" />
                </div>
                <div className="relative w-full h-full">
                    <Image
                        src={image || "/media/images/placeholder.webp"}
                        alt={track}
                        fill
                        sizes="(max-width: 768px) 144px, 144px"
                        className="object-cover"
                        loading="lazy"
                        placeholder="blur"
                        blurDataURL="/media/images/placeholder.webp"
                    />
                </div>
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between p-4 text-sm text-white">
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <p className="mb-0 overflow-hidden whitespace-nowrap text-ellipsis">{track}</p>
                        <button className="bg-transparent cursor-pointer text-white/50 hover:text-white" >
                            <Icon icon="lucide:ellipsis-vertical" />
                        </button>
                    </div>
                    <p className="mb-2 overflow-hidden whitespace-nowrap text-ellipsis text-mirage-500">{collection}</p>
                    <p className="mb-2 overflow-hidden text-ellipsis line-clamp-2 text-white/40">{description}</p>
                </div>
                <div className="flex gap-1 text-xs text-white/70">
                    <p>{formatShortDate(release)}</p>
                    <p>{formatDuration(+duration)}</p>
                </div>
            </div>
        </div>
    </div>
);

export default EpisodeCard;
