import Error from "@/app/components/shared/Error";
import NoSearchTerm from "@/app/components/shared/NoSearchTerm";
import { cookies } from "next/headers";
import { fetchPodcasts } from "@/app/services/podcasts";
import { fetchEpisodes } from "@/app/services/episodes";
import { Podcast } from "@/app/types/Podcast";
import { Episode } from "@/app/types/Episode";
import { ItunesSearchResponse } from "@/app/types/Response";
import EpisodesWithLayout from "@/app/components/episodes/EpisodesWithLayout";
import PodcastsWithLayout from "@/app/components/podcasts/PodcastsWithLayout";
import LayoutPreferenceClient, { LayoutType } from "@/app/LayoutPreferenceClient";

export default async function Home({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) {
  const params = await searchParams;
  const searchTerm = params.podcast || "";
  let podcasts: Podcast[] = [];
  let episodes: Episode[] = [];
  let error: string | null = null;

  try {
    const [dataPodcasts, dataEpisodes]: [ItunesSearchResponse<Podcast>, ItunesSearchResponse<Episode>] = await Promise.all([
      fetchPodcasts(searchTerm),
      fetchEpisodes(searchTerm)
    ]);
    podcasts = dataPodcasts.results;
    episodes = dataEpisodes.results;
  } catch (err: any) {
    error = err.message || "Failed to fetch podcasts";
  }

  if (!searchTerm.trim()) {
    return <NoSearchTerm />;
  }

  if (error) {
    return <Error message={error} />;
  }

  const cookieStore = await cookies();
  const validLayouts: LayoutType[] = ["grid", "scroll", "list", "compact"];

  const podcastLayoutCookie = cookieStore.get("podcastsLayout")?.value;
  const initialPodcastLayout: LayoutType = validLayouts.includes(podcastLayoutCookie as LayoutType) ? (podcastLayoutCookie as LayoutType) : "grid";

  const episodeLayoutCookie = cookieStore.get("episodesLayout")?.value;
  const initialEpisodeLayout: LayoutType = validLayouts.includes(episodeLayoutCookie as LayoutType) ? (episodeLayoutCookie as LayoutType) : "grid";

  return (
    <>
      <LayoutPreferenceClient initialLayout={initialPodcastLayout} cookieName="podcastsLayout">
        <PodcastsWithLayout podcasts={podcasts} searchTerm={searchTerm} />
      </LayoutPreferenceClient>
      <LayoutPreferenceClient initialLayout={initialEpisodeLayout} cookieName="episodesLayout">
        <EpisodesWithLayout episodes={episodes} searchTerm={searchTerm} />
      </LayoutPreferenceClient>
    </>
  );
}
