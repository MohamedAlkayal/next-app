"use client";
import React from "react";
import { Episode } from "../../types/Episode";
import EpisodesCardsContainer from "./EpisodesCardContainer";
import { useLayoutPreference } from "../../LayoutPreferenceClient";

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
