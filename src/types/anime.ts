export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    extraLarge: string;
  };
  description: string;
  episodes: number;
  averageScore: number;
}