import Error from "./components/shared/Error";
import NoSearchTerm from "./components/shared/NoSearchTerm";
import { cookies } from "next/headers";
import { fetchPodcasts } from "./services/podcasts";
import { fetchEpisodes } from "./services/episodes";
import { Podcast } from "./types/Podcast";
import { Episode } from "./types/Episode";
import { ItunesSearchResponse } from "./types/Response";
import EpisodesWithLayout from "./components/episodes/EpisodesWithLayout";
import PodcastsWithLayout from "./components/podcasts/PodcastsWithLayout";
import LayoutPreferenceClient, { LayoutType } from "./LayoutPreferenceClient";

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
  const layoutCookie = cookieStore.get("episodesLayout")?.value;
  const validLayouts: LayoutType[] = ["grid", "scroll", "list", "compact"];
  const initialLayout: LayoutType = validLayouts.includes(layoutCookie as LayoutType) ? (layoutCookie as LayoutType) : "grid";

  return (
    <>
      <head>
        <title>Podcasts | Thmanyah Task</title>
      </head>
      <LayoutPreferenceClient initialLayout={initialLayout}>
        <PodcastsWithLayout podcasts={podcasts} searchTerm={searchTerm} />
        <EpisodesWithLayout episodes={episodes} searchTerm={searchTerm} />
      </LayoutPreferenceClient>
    </>
  );
}
