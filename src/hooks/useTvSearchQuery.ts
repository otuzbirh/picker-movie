import { useQuery } from '@tanstack/react-query';

import { searchTopTvShows } from '@/pages/home/api';
import { QueryKeys } from '@/data/enums/queryKeys';

export default function useTvSearchQuery(searchTerm: string) {
  return useQuery({
    queryKey: [QueryKeys.TV_SHOWS, searchTerm],
    queryFn: () => searchTopTvShows(searchTerm),
  });
}
