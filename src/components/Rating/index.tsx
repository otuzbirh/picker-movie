import type { PropsWithChildren } from 'react';

import { IconStarFilled } from '@tabler/icons-react';

import s from './index.module.css';

interface RatingProps extends PropsWithChildren {
  variant?: 'standard' | 'extended';
  starPosition?: 'left' | 'right';
}

const MAX_VOUNT_COUNT = 10;

export default function Rating({
  children,
  variant = 'standard',
  starPosition = 'right',
}: RatingProps) {
  return (
    <div className={s.rating}>
      {starPosition === 'left' && <IconStarFilled style={{ color: '#FFD700' }} size={18} />}
      {children}
      {variant === 'extended' && `/${MAX_VOUNT_COUNT}`}
      {starPosition === 'right' && <IconStarFilled style={{ color: '#FFD700' }} size={18} />}
    </div>
  );
}
