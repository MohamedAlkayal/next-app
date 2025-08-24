"use client";
import React from "react";
import { Episode } from "@/app/types/Episode";
import EpisodesCardsContainer from "@/app/components/episodes/EpisodesCardContainer";
import { useLayoutPreference } from "@/app/LayoutPreferenceClient";

interface Props {
    episodes: Episode[];
    searchTerm: string;
}

export default function EpisodesWithLayout({ episodes, searchTerm }: Props) {
    const { layout, setLayout } = useLayoutPreference();

    return (
        <EpisodesCardsContainer
            episodes={episodes}
            searchTerm={searchTerm}
            layout={layout}
            onLayoutChange={setLayout}
        />
    );
}
