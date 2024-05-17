import fallbackImage from '@/assets/images/default-fallback.png';

import { getVideoUrl, resourcesUrl } from '@/data/config';
import { MovieDetailed, TvDetailed } from '@/types';
import { formatDecimalNumber } from '@/utils/formatDecimalNumber';

type UseFormattedDataParams = MovieDetailed | TvDetailed;

export default function useFormattedData(data: UseFormattedDataParams) {
  const dateReleased = 'release_date' in data ? data.release_date : data.first_air_date;
  const hasVideo = data.videos?.results?.length && data.videos.results[0]?.key;

  const coverImage = data.backdrop_path ? `${resourcesUrl}${data.backdrop_path}` : fallbackImage;
  const posterImage = data.poster_path ? `${resourcesUrl}${data.poster_path}` : fallbackImage;
  const title = 'title' in data ? data.title : data.name;
  const rating = data.vote_average ? `${formatDecimalNumber(data.vote_average)}` : null;
  const releaseYear = dateReleased ? dateReleased?.split('-')[0] : null;
  const description = data.overview;
  const videoUrl = hasVideo ? getVideoUrl(data.videos.results[0].key) : null;

  return {
    coverImage,
    posterImage,
    videoUrl,
    title,
    rating,
    releaseYear,
    description,
    genres: data.genres,
    cast: data.credits.cast,
  };
}
