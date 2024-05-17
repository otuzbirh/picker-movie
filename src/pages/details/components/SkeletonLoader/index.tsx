import Skeleton from '@/components/Loaders/Skeleton';

import s from '../../index.module.css';

export default function SkeletonLoader() {
  return (
    <div className={s.wrapper}>
      <div className={s.mediaContainer}>
        <Skeleton style={{ width: '100%', height: '100%' }} variant="rectangular" />
      </div>

      <div className={s.contentContainer}>
        <div className={s.posterWrapper}>
          <Skeleton style={{ width: '100%', height: '100%' }} variant="rectangular" />
        </div>

        <div className={s.descriptionContainer}>
          <Skeleton variant="rounded" height={40} style={{ width: '100%' }} />
          <Skeleton variant="rounded" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  );
}
