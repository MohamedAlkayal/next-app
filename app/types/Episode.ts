export interface EpisodeGenre {
    name: string;
    id: string;
}
export interface Episode {
    wrapperType: string;
    kind: string;
    trackId: number;
    trackName: string;
    episodeGuid?: string;
    collectionId: number;
    collectionName: string;
    collectionViewUrl?: string;
    artistIds?: number[];
    artistViewUrl?: string;
    description?: string;
    shortDescription?: string;
    episodeContentType?: string;
    episodeFileExtension?: string;
    previewUrl?: string;
    episodeUrl?: string;
    trackTimeMillis?: number;
    contentAdvisoryRating?: string;
    closedCaptioning?: string;
    releaseDate?: string;
    country?: string;
    artworkUrl60?: string;
    artworkUrl160?: string;
    artworkUrl600?: string;
    trackViewUrl?: string;
    feedUrl?: string;
    genres?: EpisodeGenre[];
    [key: string]: unknown;
}
