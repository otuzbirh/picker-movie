import { MovieDetailed, TvDetailed } from '@/types';
import { commonDetailedApi } from '@/api/commonApi';

const defaultQueryParams = { append_to_response: 'videos,credits' };

export const getDetailedMovie = (id: string) =>
  commonDetailedApi<MovieDetailed>(`/movie/${id}`, defaultQueryParams);

export const getDetailedTvShow = (id: string) =>
  commonDetailedApi<TvDetailed>(`/tv/${id}`, defaultQueryParams);
