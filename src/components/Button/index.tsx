import { PropsWithChildren, CSSProperties } from 'react';

import cx from 'clsx';

import s from './index.module.css';

type ButtonSize = 'md' | 'sm' | 'lg';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  size: ButtonSize;
  style?: CSSProperties;
}

export default function Button({ onClick, children, size = 'md', style = {} }: ButtonProps) {
  return (
    <button type="button" onClick={onClick} className={cx(s.button, s[size])} style={{ ...style }}>
      {children}
    </button>
  );
}
