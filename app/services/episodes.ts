

import { Episode } from "@/app/types/Episode";
import { ItunesSearchResponse } from "@/app/types/Response";

const baseApiUrl = process.env.NEXT_PUBLIC_baseApiUrl || '';


/**
 * Fetch Episodes from the API using a search term.
 * Throws if no search term is provided or if the fetch fails.
 * Uses Next.js server-side caching for 3 minutes.
 */
export async function fetchEpisodes(searchTerm: string): Promise<ItunesSearchResponse<Episode>> {
    if (!searchTerm || !searchTerm.trim()) {
        throw new Error("Please provide a search term to search for episodes.");
    }

    const url = `${baseApiUrl}/search/episodes?term=${encodeURIComponent(searchTerm)}&entity=podcastEpisode`;

    const response = await fetch(url, {
        next: { revalidate: 180 }
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch episodes: ${response.status} ${errorText}`);
    }

    return response.json();
}