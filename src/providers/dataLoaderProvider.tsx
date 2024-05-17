import type { Dispatch, PropsWithChildren } from 'react';
import { createContext, useMemo, useReducer } from 'react';

import { IconMovie, IconDeviceTv } from '@tabler/icons-react';

import {
  DataLoaderAction,
  DataLoaderState,
  DataLoaderDispatchActions,
  DataLoaderContextType,
  Tab,
} from '@/types';
import { TabEnums, DataLoaderEnums } from '@/data/enums';

const tabs = [
  { name: TabEnums.MOVIES, Icon: IconMovie },
  { name: TabEnums.TV_SHOWS, Icon: IconDeviceTv },
] as Tab[];

const initialState: DataLoaderState = {
  tabs,
  selectedTab: TabEnums.MOVIES,
  searchTerm: '',
  /* page: 1 */
};

const createDispatchActions = ( dispatch: Dispatch<DataLoaderAction> ): DataLoaderDispatchActions => ({
  setSearchTerm: (payload) => dispatch({ type: DataLoaderEnums.SET_SEARCH_TERM, payload }),
  /* setPage: (payload) => dispatch({ type: DataLoader.SET_PAGE, payload }), */
  setSelectedTab: (payload) => dispatch({ type: DataLoaderEnums.SET_SELECTED_TAB, payload }),
});

export const DataLoaderContext = createContext<DataLoaderContextType>({
  ...initialState,
  ...createDispatchActions(() => {}),
});

export const DataLoaderProvider = ({ children }: PropsWithChildren) => {
  const dataLoaderReducer = (state: DataLoaderState, action: DataLoaderAction) => {
    switch (action.type) {
      case DataLoaderEnums.SET_SEARCH_TERM:
        return { ...state, searchTerm: action.payload };
      /* case DataLoader.SET_PAGE:
        return { ...state, page: action.payload }; */
      case DataLoaderEnums.SET_SELECTED_TAB:
        return { ...state, selectedTab: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(dataLoaderReducer, { ...initialState });

  const actions = useMemo(() => createDispatchActions(dispatch), [dispatch]);

  return (
    <DataLoaderContext.Provider value={{ ...state, ...actions }}>
      {children}
    </DataLoaderContext.Provider>
  );
};
