
"use client";
import React from "react";
import { Icon } from '@iconify/react';
import Grid from "@/app/components/shared/Grid";
import Scroll from "@/app/components/shared/Scroll";
import Empty from "@/app/components/shared/Empty";
import { Episode } from "@/app/types/Episode";
import EpisodeCard from "@/app/components/episodes/EpisodeCard";
import EpisodeListItem from "@/app/components/episodes/EpisodeListItem";

interface EpisodesCardsContainerProps {
    searchTerm: string;
    episodes: Episode[];
    layout: 'grid' | 'scroll' | 'list' | 'compact';
    onLayoutChange: (layout: 'grid' | 'scroll' | 'list' | 'compact') => void;
}



const layoutOptions = [
    { key: 'grid', label: 'Grid' },
    { key: 'scroll', label: 'Scroll' },
    { key: 'list', label: 'List' },
    { key: 'compact', label: 'Compact List' }
];

const EpisodesCardsContainer: React.FC<EpisodesCardsContainerProps> = ({ searchTerm, episodes, layout, onLayoutChange }) => {
    const [layoutMenuOpen, setLayoutMenuOpen] = React.useState(false);

    const handleLayoutMenuToggle = () => setLayoutMenuOpen((open) => !open);
        const handleLayoutChange = (key: 'grid' | 'scroll' | 'list' | 'compact') => {
            if (onLayoutChange) onLayoutChange(key);
            setLayoutMenuOpen(false);
        };

    return (
        <>
            <div className='p-3 pt-10 border-b border-white/10'>
                <div className='flex justify-between items-center text-white'>
                    <p className='text-sm'>Top episodes for {searchTerm}</p>
                    <div className="relative flex items-center">
                        <button className="bg-transparent cursor-pointer text-white/50 hover:text-white" onClick={handleLayoutMenuToggle}>
                            <Icon icon="lucide:ellipsis-vertical" />
                        </button>
                        {layoutMenuOpen && (
                            <div className="p-1 absolute top-7 right-0 w-56 bg-gradient-to-b from-mirage-900/90 to-mirage-950/50 backdrop-blur-md border border-white/10 rounded shadow-lg z-10">
                                {layoutOptions.map(opt => (
                                    <button
                                        key={opt.key}
                                        className={`p-2 block w-full text-left text-sm cursor-pointer duration-300 hover:bg-black/20 ${layout === opt.key ? 'bg-black/10 text-white' : 'text-white/80'}`}
                                            onClick={() => handleLayoutChange(opt.key as 'grid' | 'scroll' | 'list' | 'compact')}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='py-4'>
                {episodes.length === 0 ? (
                    <Empty title="No episodes found." description="Try a different search term or check back later." />
                ) : layout === 'grid' ? (
                    <Grid className="!grid-cols-1 lg:!grid-cols-2">
                        {episodes.map((episode: Episode) => (
                            <EpisodeCard
                                key={episode.trackId}
                                collection={episode.collectionName}
                                track={episode.trackName || " "}
                                description={episode.description || " "}
                                release={episode.releaseDate || " "}
                                duration={episode.trackTimeMillis || " "}
                                image={
                                    typeof episode?.artworkUrl600 === "string" ? episode.artworkUrl600 :
                                        typeof episode?.artworkUrl100 === "string" ? episode.artworkUrl100 :
                                            typeof episode?.artworkUrl60 === "string" ? episode.artworkUrl60 :
                                                ""
                                }
                            />
                        ))}
                    </Grid>
                ) : layout === 'scroll' ? (
                    <Scroll>
                        {episodes.map((episode: Episode) => (
                            <EpisodeCard
                                key={episode.trackId}
                                collection={episode.collectionName}
                                track={episode.trackName || " "}
                                description={episode.description || " "}
                                release={episode.releaseDate || " "}
                                duration={episode.trackTimeMillis || " "}
                                image={
                                    typeof episode?.artworkUrl600 === "string" ? episode.artworkUrl600 :
                                        typeof episode?.artworkUrl100 === "string" ? episode.artworkUrl100 :
                                            typeof episode?.artworkUrl60 === "string" ? episode.artworkUrl60 :
                                                ""
                                }
                            />
                        ))}
                    </Scroll>
                ) : layout === 'list' ? (
                    <div className="space-y-2">
                        {episodes.map((episode: Episode) => (
                            <EpisodeListItem
                                key={episode.trackId}
                                collection={episode.collectionName}
                                track={episode.trackName || " "}
                                release={episode.releaseDate || " "}
                                description={episode.description || " "}

                                duration={episode.trackTimeMillis || " "}
                                image={
                                    typeof episode?.artworkUrl600 === "string" ? episode.artworkUrl600 :
                                        typeof episode?.artworkUrl100 === "string" ? episode.artworkUrl100 :
                                            typeof episode?.artworkUrl60 === "string" ? episode.artworkUrl60 :
                                                ""
                                }
                            />
                        ))}
                    </div>
                ) : (
                    <Grid className="!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-0">
                        {episodes.map((episode: Episode) => (
                            <EpisodeListItem
                                key={episode.trackId}
                                collection={episode.collectionName}
                                track={episode.trackName || " "}
                                description={episode.description || " "}
                                release={episode.releaseDate || " "}
                                duration={episode.trackTimeMillis || " "}
                                isCompact={true}
                                image={
                                    typeof episode?.artworkUrl600 === "string" ? episode.artworkUrl600 :
                                        typeof episode?.artworkUrl100 === "string" ? episode.artworkUrl100 :
                                            typeof episode?.artworkUrl60 === "string" ? episode.artworkUrl60 :
                                                ""
                                }
                            />
                        ))}
                    </Grid>
                )}
            </div>
        </>
    );
};

export default EpisodesCardsContainer;
