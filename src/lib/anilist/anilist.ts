import { Anime } from "@/types/anime";

const anilistApi: string = process.env.ANILIST_API || "";

export async function getAnimeList(): Promise<Anime[]> {
  const query = `
    query {
      Page(perPage: 5) {
        media(type: ANIME, sort: POPULARITY_DESC) {
          id
          title {
            romaji
            english
            native
          }
          coverImage {
            large
          }
          description
          episodes
          averageScore
        }
      }
    }
  `;

  const response = await fetch(anilistApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch anime data");
  }

  const { data } = await response.json();
  return data.Page.media;
}



export async function getAnimeById(id: number): Promise<Anime> {
  const query = `
    query ($id: Int) {
      Media(id: $id, type: ANIME) {
        id
        title {
          romaji
          english
          native
        }
        description
        coverImage {
          medium
          large
          extraLarge
        }
        bannerImage
        averageScore
        meanScore
        status
        episodes
        duration
        format
        source
        countryOfOrigin
        isAdult
        siteUrl
      }
    }
  `;

  const variables = {
    id: id,
  };

  const response = await fetch(anilistApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch anime data");
  }

  const { data } = await response.json();
  return data.Media;
}