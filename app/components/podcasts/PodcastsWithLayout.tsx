"use client";
import React from "react";
import { Podcast } from "@/app/types/Podcast";
import PodcastCardsContainer from "@/app/components/podcasts/PodcastCardsContainer";
import { useLayoutPreference } from "@/app/LayoutPreferenceClient";

interface Props {
    podcasts: Podcast[];
    searchTerm: string;
}

export default function PodcastsWithLayout({ podcasts, searchTerm }: Props) {
    const { layout, setLayout } = useLayoutPreference();

    const isGridView = layout === 'grid';

    const handleToggleLayout = () => {
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
