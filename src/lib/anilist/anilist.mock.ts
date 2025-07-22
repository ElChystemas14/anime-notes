import { Anime } from "@/types/anime";
import { animeMock } from "./mock";

export function getAnimeList(): Promise<Anime[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(animeMock);
    }, 1000);
  });
}

export function getAnimeById(id: number): Promise<Anime> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(animeMock.find((anime) => anime.id === id)!);
    }, 1000);
  });
}