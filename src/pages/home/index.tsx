import { useCallback } from 'react';

import Tabs from '@/components/Tabs/TabGroup';
import Card from '@/components/Card';
import CardSkeleton from '@/components/Card/SkeletonLoader';
import Search from './components/Search';
import InfoText from './components/InfoText';

import { MovieBasic, TabValues, TvBasic } from '@/types';
import { useDataLoader } from '@/hooks';

import s from './index.module.css';
import { TabEnums } from '@/data/enums';

const SKELETONS = Array.from({ length: 10 }, (v, i) => i);

const getDifferentiatingCardProps = (item: MovieBasic | TvBasic) => {
  const props = {
    title: 'title' in item ? item.title : item.name,
    dateReleased: 'release_date' in item ? item.release_date : item.first_air_date,
    type: 'title' in item ? TabEnums.MOVIES : TabEnums.TV_SHOWS,
  };

  return props;
};

export default function Home() {
  const { data, handlers } = useDataLoader();

  const handleTabSelect = useCallback(
    (name: TabValues) => {
      if (data.selectedTab === name) return;
      handlers.setSelectedTab(name);
    },
    [handlers]
  );

  return (
    <div className={s.wrapper}>
      <div className={s.contentContainer}>
        <Tabs tabs={data.tabs} selectedTab={data.selectedTab} onSelect={handleTabSelect} />
        <Search />
        <InfoText />
        <div className={s.listContainer}>
          {data.isLoading
            ? SKELETONS.map((item) => <CardSkeleton key={item} />)
            : data.items?.results?.map((item, index) => (
                <Card
                  id={item.id}
                  key={index}
                  image={item.backdrop_path}
                  description={item.overview}
                  rating={item.vote_average}
                  {...getDifferentiatingCardProps(item)}
                />
              ))}
        </div>
      </div>
    </div>
  );
}
