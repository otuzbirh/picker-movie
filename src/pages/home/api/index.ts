import { MoviesResponse, TvResponse } from '@/types';
import { commonListApi } from '@/api/commonApi';

const defaultQueryParams = {
  include_adult: false,
  include_video: false,
  language: 'en-US',
  sort_by: 'vote_average.desc',
};

export const getTopMovies = () =>
  commonListApi<MoviesResponse>('/discover/movie', defaultQueryParams);

export const getTopTvShows = () => commonListApi<TvResponse>('/discover/tv', defaultQueryParams);

export const searchTopTvShows = (searchTerm: string) =>
  commonListApi<TvResponse>('/search/tv', { ...defaultQueryParams, query: searchTerm });

export const searchTopMovies = (searchTerm: string) =>
  commonListApi<MoviesResponse>('/search/movie', { ...defaultQueryParams, query: searchTerm });
