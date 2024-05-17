import { useQuery } from '@tanstack/react-query';

import { getDetailedMovie } from '../api';
import { QueryKeys } from '@/data/enums/queryKeys';

export default function useMovieQuery(id: string) {
  return useQuery({ queryKey: [QueryKeys.MOVIE, id], queryFn: () => getDetailedMovie(id) });
}
