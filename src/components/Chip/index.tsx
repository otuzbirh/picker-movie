import type { PropsWithChildren } from 'react';

import cx from 'clsx';

import { hexToRgb } from '@/utils/hexToRgb';

import s from './index.module.css';

interface ChipProps extends PropsWithChildren {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const getChipBackgroundColor = (color: string) => {
  const { r, g, b } = hexToRgb(color);
  const fadedColor = `rgba(${r},${g},${b},0.2)`;

  return fadedColor;
};

export default function Chip({ color = '#f8f9fa', size = 'md', children }: ChipProps) {
  return (
    <div
      className={cx(s.wrapper, s[size])}
      style={{ color, backgroundColor: getChipBackgroundColor(color) }}
    >
      {children}
    </div>
  );
}
