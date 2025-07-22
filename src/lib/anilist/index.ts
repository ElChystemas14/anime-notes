const useAnilist = process.env.NEXT_PUBLIC_USE_ANILIST === 'true';

const { getAnimeList, getAnimeById } = useAnilist 
  ? require('./anilist') 
  : require('./anilist.mock');

export { getAnimeList, getAnimeById };