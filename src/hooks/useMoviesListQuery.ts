import { useQuery } from '@tanstack/react-query';

import { getTopMovies } from '@/pages/home/api';
import { QueryKeys } from '@/data/enums/queryKeys';

export default function useMoviesListQuery() {
  return useQuery({ queryKey: [QueryKeys.MOVIES], queryFn: getTopMovies });
}
