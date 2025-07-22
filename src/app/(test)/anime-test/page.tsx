import { getAnimeById } from "@/lib/anilist";

export default async function AnimeTestPage() {
  const anime = await getAnimeById(4);
  
  return (
    <div className="max-w-md mx-auto bg-card rounded-xl p-4 mt-6">
      <h1 className="text-2xl font-bold text-primary mb-2">
        {anime.title.romaji} ({anime.title.english})
      </h1>

      <img src={anime.coverImage.extraLarge} alt={anime.title.romaji} className="w-full rounded-lg mb-4"/>

      <p className="text-mutedText mb-2">
        Episodios: {anime.episodes} | Puntuación: {anime.averageScore}
      </p>

      <div 
        className="prose prose-invert text-sm"
        dangerouslySetInnerHTML={{ __html: anime.description }}
      />
    </div>
  );
}