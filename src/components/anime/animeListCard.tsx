import { Anime } from "@/types/anime";

interface AnimeListCardProps {
  anime: Anime;
}

export default function AnimeListCard({ anime }: AnimeListCardProps) {
  return (
    <div key={anime.id} className="border rounded p-2 shadow w-64">
      <img src={anime.coverImage.extraLarge} alt={anime.title.romaji} className="w-full h-auto" />
      <h2 className="text-lg font-bold mt-2">{anime.title.romaji}</h2>
      <p className="text-sm line-clamp-3">{anime.description}</p>
      <p className="text-xs mt-1">Episodios: {anime.episodes ?? "?"}</p>
      <p className="text-xs">Score: {anime.averageScore ?? "?"}</p>
    </div>
  );
}