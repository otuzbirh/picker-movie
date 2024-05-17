import { useQuery } from '@tanstack/react-query';

import { getTopTvShows } from '@/pages/home/api';
import { QueryKeys } from '@/data/enums/queryKeys';

export default function useTvListQuery() {
  return useQuery({ queryKey: [QueryKeys.TV_SHOWS], queryFn: getTopTvShows });
}
