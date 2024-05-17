import { useQuery } from '@tanstack/react-query';

import { getDetailedTvShow } from '../api';
import { QueryKeys } from '@/data/enums/queryKeys';

export default function useTvQuery(id: string) {
  return useQuery({ queryKey: [QueryKeys.TV_SHOW, id], queryFn: () => getDetailedTvShow(id) });
}
