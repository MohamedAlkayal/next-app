

import { Podcast } from "@/app/types/Podcast";
import { ItunesSearchResponse } from "@/app/types/Response";

const baseApiUrl = process.env.NEXT_PUBLIC_baseApiUrl || '';


/**
 * Fetch podcasts from the API using a search term.
 * Throws if no search term is provided or if the fetch fails.
 * Uses Next.js server-side caching for 3 minutes.
 */
export async function fetchPodcasts(searchTerm: string): Promise<ItunesSearchResponse<Podcast>> {
    if (!searchTerm || !searchTerm.trim()) {
        throw new Error("Please provide a search term to search for podcasts.");
    }

    const url = `${baseApiUrl}/search/podcast?term=${encodeURIComponent(searchTerm)}`;

    const response = await fetch(url, {
        next: { revalidate: 180 }
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch podcasts: ${response.status} ${errorText}`);

    }
    const data = await response.json();
    console.log("Fetched podcasts:", data);
    return data;
}