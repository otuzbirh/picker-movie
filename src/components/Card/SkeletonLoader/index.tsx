import Skeleton from '@/components/Loaders/Skeleton';

import s from '../index.module.css';

export default function CardSkeletonLoader() {
  return (
    <div className={s.wrapper}>
      <div className={s.imageContainer}>
        <Skeleton variant="rectangular" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className={s.body}>
        <div className={s.titleContainer}>
          <Skeleton variant="rounded" height={18} style={{ width: '50%' }} />
        </div>

        <Skeleton variant="rounded" height={71} style={{ width: '100%' }} />

        <div className={s.bottom}>
          <Skeleton variant="rounded" height={28} style={{ width: '100%' }} />
          <div className={s.rating}>
            <Skeleton variant="rounded" width={60} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
}
