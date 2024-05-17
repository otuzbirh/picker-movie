import { useDataLoader } from '@/hooks';

import { TabEnums } from '@/data/enums';
import { TabValues } from '@/types';

import s from './index.module.css';

const messages = {
  [TabEnums.MOVIES]: (searchTerm: string) =>
    searchTerm && searchTerm.length >= 3
      ? `Search results for: ${searchTerm} (Movies) `
      : 'Search results for top 10 movies',
  [TabEnums.TV_SHOWS]: (searchTerm: string) =>
    searchTerm && searchTerm.length >= 3
      ? `Search results for: ${searchTerm} (TV shows) `
      : 'Search results for top 10 TV shows',
};

const getMessage = (selectedTab: TabValues, searchTerm: string) =>
  messages[selectedTab](searchTerm);

export default function InfoText() {
  const {
    data: { selectedTab, searchTerm },
  } = useDataLoader();

  return <p className={s.text}>{getMessage(selectedTab, searchTerm)}</p>;
}
