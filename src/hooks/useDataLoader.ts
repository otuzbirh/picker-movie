import { useContext, useCallback } from 'react';

import { DataLoaderContext } from '@/providers';

import { useMoviesListQuery, useTvListQuery } from '@/hooks';
import { debounce } from '@/utils/debounce';
import { TabValues } from '@/types';
import { TabEnums } from '@/data/enums';
import useTvSearchQuery from './useTvSearchQuery';
import useMoviesSearchQuery from './useMoviesSearchQuery';

const listQueries = {
  [TabEnums.MOVIES]: useMoviesListQuery,
  [TabEnums.TV_SHOWS]: useTvListQuery,
};

const searchQueries = {
  [TabEnums.MOVIES]: useMoviesSearchQuery,
  [TabEnums.TV_SHOWS]: useTvSearchQuery,
};

const getQuery = (selectedTab: TabValues, searchTerm: string) => {
  if (searchTerm && searchTerm.length >= 3) {
    return searchQueries[selectedTab](searchTerm);
  }
  return listQueries[selectedTab]();
};

export default function useDataLoader() {
  const { setSearchTerm, searchTerm, tabs, selectedTab, setSelectedTab } =
    useContext(DataLoaderContext);

  const { data, isFetching } = getQuery(selectedTab, searchTerm);

  const debouncedSearch = debounce((newSearch: string) => {
    setSearchTerm(newSearch);
  }, 1000);

  const handleSearch = useCallback((newSearch: string) => {
    debouncedSearch(newSearch);
  }, []);

  return {
    data: { tabs, searchTerm, selectedTab, isLoading: isFetching, items: data },
    handlers: { handleSearch, setSelectedTab },
  };
}
