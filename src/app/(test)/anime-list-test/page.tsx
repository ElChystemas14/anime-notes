"use client";

import { getAnimeList } from "@/lib/anilist";
import { useEffect, useState } from "react";
import { Anime } from "@/types/anime";
import AnimeListCard from "@/components/anime/animeListCard";

export default function AnimeListTestPage() {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchAnimeList = async () => {
      try {
        const data = await getAnimeList();
        setAnimeList(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching anime list:", error);
        setLoading(false);
      }
    };
    fetchAnimeList();
  }, []);

  if (loading) {
    return <p className="p-4 text-center text-2xl font-bold">Loading...</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {animeList.map((anime) => (
        <AnimeListCard key={anime.id} anime={anime} />
      ))}
    </div>
  );
}