
"use client";
import PodcastCard from "@/app/components/podcasts/PodcastCard";
import React, { useState } from "react";
import { Icon } from '@iconify/react';
import Grid from "@/app/components/shared/Grid";
import Scroll from "@/app/components/shared/Scroll";
import Empty from "@/app/components/shared/Empty";
import { Podcast } from "@/app/types/Podcast";

interface PodcastCardsContainerProps {
    searchTerm: string;
    podcasts: Podcast[];
    isGridView?: boolean;
    onToggleLayout?: () => void;
}



const PodcastCardsContainer: React.FC<PodcastCardsContainerProps> = ({
    searchTerm,
    podcasts,
    isGridView: controlledIsGridView,
    onToggleLayout
}) => {
    // Use internal state if not controlled from outside
    const [internalIsGridView, setInternalIsGridView] = useState(false);
    const [layoutMenuOpen, setLayoutMenuOpen] = useState(false);

    // If isGridView is provided, use it; otherwise use internal state
    const isGridView = controlledIsGridView !== undefined ? controlledIsGridView : internalIsGridView;

    const toggleLayout = () => {
        if (onToggleLayout) {
            onToggleLayout();
        } else {
            setInternalIsGridView((prev) => !prev);
        }
        setLayoutMenuOpen(false);
    };

    const handleLayoutMenuToggle = () => {
        setLayoutMenuOpen((prev) => !prev);
    };

    return (
        <>
            <div className='p-3 pt-10 border-b border-white/10'>
                <div className='flex justify-between items-center text-white'>
                    <p className='text-sm'>Top Podcasts for {searchTerm}</p>
                    <div className="flex gap-1 items-center">
                        {
                            isGridView || (
                                <>
                                    <button className="bg-transparent cursor-pointer text-white/50 hover:text-white">
                                        <Icon icon="lucide:chevron-left" className="text-xl" />
                                    </button>
                                    <button className="bg-transparent cursor-pointer text-white/50 hover:text-white">
                                        <Icon icon="lucide:chevron-right" className="text-xl" />
                                    </button>
                                </>
                            )
                        }
                        <div className="relative flex items-center">
                            <button className="bg-transparent cursor-pointer text-white/50 hover:text-white" onClick={handleLayoutMenuToggle}>
                                <Icon icon="lucide:ellipsis-vertical" />
                            </button>
                            {layoutMenuOpen && (
                                <div className="p-1 absolute top-7 right-0 w-56  bg-gradient-to-b from-mirage-900/90 to-mirage-950/50 backdrop-blur-md border border-white/10 rounded shadow-lg ">
                                    <button className="p-2 block w-full text-left  text-sm cursor-pointer duration-300 hover:bg-black/20" onClick={toggleLayout}>
                                        Switch layout to  {isGridView ? "Scroll" : "Grid"}
                                    </button>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
            <div className='py-4'>
                {podcasts.length === 0 ? (
                    <Empty title="No podcasts found." description="Try a different search term or check back later." />
                ) : isGridView ? (
                    <Grid>
                        {podcasts.map((podcast: Podcast, idx: number) => (
                            <PodcastCard
                                key={idx}
                                title={podcast.collectionName || podcast.trackName || ""}
                                producer={podcast.artistName || ""}
                                image={podcast.artworkUrl600 || podcast.artworkUrl100 || podcast.artworkUrl60 || ""}
                                isGridView={true}
                            />
                        ))}
                    </Grid>
                ) : (
                    <Scroll>
                        {podcasts.map((podcast: Podcast, idx: number) => (
                            <PodcastCard
                                key={idx}
                                title={podcast.collectionName || podcast.trackName || ""}
                                producer={podcast.artistName || ""}
                                image={podcast.artworkUrl600 || podcast.artworkUrl100 || podcast.artworkUrl60 || ""}
                            />
                        ))}
                    </Scroll>
                )}
            </div>
        </>
    );
};

export default PodcastCardsContainer;
