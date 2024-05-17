import { useQuery } from '@tanstack/react-query';

import { searchTopMovies } from '@/pages/home/api';
import { QueryKeys } from '@/data/enums/queryKeys';

export default function useMoviesSearchQuery(searchTerm: string) {
  return useQuery({
    queryKey: [QueryKeys.MOVIES, searchTerm],
    queryFn: () => searchTopMovies(searchTerm),
  });
}
