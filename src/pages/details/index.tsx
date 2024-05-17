import { useParams, useSearchParams } from 'react-router-dom';

import cx from 'clsx';

import Rating from '@/components/Rating';
import Chip from '@/components/Chip';
import Profile from '@/components/Profile';
import NotFound from '@/components/NotFound';
import SkeletonLoader from './components/SkeletonLoader';

import { useTvQuery, useMovieQuery, useFormattedData } from './hooks';
import { TabEnums } from '@/data/enums';
import { TabValues } from '@/types';

import s from './index.module.css';

const queries = {
  [TabEnums.MOVIES]: useMovieQuery,
  [TabEnums.TV_SHOWS]: useTvQuery,
};

const isTabValue = (value: any): value is TabValues => Object.values(TabEnums).includes(value);

const getQuery = (type: string, id: string) => {
  if (!isTabValue(type)) throw new Error(`Invalid type: ${type}`);
  return queries[type](id);
};

export default function DetailedView() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  if (!type || !id) return <NotFound />;

  const { data, isFetching } = getQuery(type, id);

  if (isFetching) return <SkeletonLoader />;
  if (!data) return <NotFound />;

  const {
    coverImage,
    posterImage,
    videoUrl,
    title,
    rating,
    releaseYear,
    description,
    genres,
    cast,
  } = useFormattedData(data);

  return (
    <div className={s.wrapper}>
      <div className={s.mediaContainer}>
        {videoUrl ? (
          <iframe
            allowFullScreen
            title="Trailer"
            style={{ height: '100%', width: '100%', border: 'none' }}
            src={videoUrl}
          />
        ) : (
          <img src={coverImage} alt="cover" />
        )}
      </div>
      <div className={s.contentContainer}>
        <div className={s.posterWrapper}>
          <img src={posterImage} alt="poster" />
        </div>

        <div className={s.descriptionContainer}>
          <h1>
            {title}
            {!!releaseYear && <span> ({releaseYear})</span>}
          </h1>

          {!!rating && (
            <Rating variant="extended" starPosition="left">
              {rating}
            </Rating>
          )}

          {!!genres.length && (
            <div className={cx(s.flexWrapRow, s.gapSm)}>
              {genres.map((genre) => (
                <Chip key={genre.id}>{genre.name}</Chip>
              ))}
            </div>
          )}

          <p>{description}</p>

          {!!cast && !!cast.length && (
            <div className={s.castGrid} style={{ marginTop: '15px' }}>
              {cast.map(({ id: profileId, profile_path, name }) => (
                <Profile key={profileId} imagePath={profile_path} name={name} size="sm" />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
