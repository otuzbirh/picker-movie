import { DataLoaderEnums } from '@/data/enums';
import { Tab, TabValues } from './tabs';

export interface DataLoaderState {
  selectedTab: TabValues;
  searchTerm: string;
  tabs: Tab[];
}

export type DataLoaderAction = { type: DataLoaderEnums.SET_SEARCH_TERM; payload: string } | { type: DataLoaderEnums.SET_SELECTED_TAB; payload: TabValues };

export interface DataLoaderDispatchActions {
  setSearchTerm: (term: string) => void;
  setSelectedTab: (tab: TabValues) => void;
}

export interface DataLoaderContextType extends DataLoaderState, DataLoaderDispatchActions {}
