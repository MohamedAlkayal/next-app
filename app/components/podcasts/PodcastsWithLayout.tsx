"use client";
import React from "react";
import { Podcast } from "../../types/Podcast";
import PodcastCardsContainer from "./PodcastCardsContainer";
import { useLayoutPreference } from "../../LayoutPreferenceClient";

interface Props {
    podcasts: Podcast[];
    searchTerm: string;
}

export default function PodcastsWithLayout({ podcasts, searchTerm }: Props) {
    const { layout, setLayout } = useLayoutPreference();

    // For podcast container, we only care if it's grid or not
    const isGridView = layout === 'grid';

    const handleToggleLayout = () => {
        // Toggle between grid and scroll only
        setLayout(isGridView ? 'scroll' : 'grid');
    };

    return (
        <PodcastCardsContainer
            podcasts={podcasts}
            searchTerm={searchTerm}
            isGridView={isGridView}
            onToggleLayout={handleToggleLayout}
        />
    );
}
