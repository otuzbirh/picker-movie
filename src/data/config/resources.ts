export const resourcesUrl = 'https://image.tmdb.org/t/p/original';

export const getVideoUrl = (key: string) => {
  const youtubeUrl = `https://youtube.com/embed/${key}`;
  return youtubeUrl;
};
