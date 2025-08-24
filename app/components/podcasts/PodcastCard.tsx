import React from "react";
import { Icon } from '@iconify/react';

interface PodcastCardProps {
    title: string;
    producer: string;
    image: string;
    isGridView?: boolean;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ title, producer, image, isGridView = false }) => (
    <div className="cursor-pointer">
        <div className={`rounded overflow-hidden bg-mirage-800 mb-2 ${isGridView ? "" : "w-32 h-32 sm:w-48 sm:h-48 md:w-60 md:h-60"}`}>
            <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className='flex justify-between items-center mb-1'>
            <p className='text-white duration-300 cursor-pointer hover:underline truncate max-w-28 sm:max-w-32 md:max-w-36'>{title}</p>
            <button className="bg-transparent text-white/20 cursor-pointer duration-300 hover:text-white">
                <Icon icon="lucide:ellipsis-vertical" className='text-sm' />
            </button>
        </div>
        <p className='text-white/50 text-xs truncate max-w-28 sm:max-w-32 md:max-w-36'>{producer}</p>
    </div>
);

export default PodcastCard;
