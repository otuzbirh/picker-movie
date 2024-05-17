import type { CSSProperties } from 'react';

import cx from 'clsx';

import s from './index.module.css';

type SkeletonVariant = 'circular' | 'rectangular' | 'rounded';

interface SkeletonProps {
  variant: SkeletonVariant;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export default function Skeleton({ variant, width = 100, height = 20, style = {} }: SkeletonProps) {
  return (
    <div
      className={cx(s.wrapper, s[variant])}
      style={{ width: `${width}px`, height: `${height}px`, ...style }}
    />
  );
}
