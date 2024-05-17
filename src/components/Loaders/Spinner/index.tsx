import s from './index.module.css';

interface SpinnerProps {
  size?: number;
}

export default function Spinner({ size = 15 }: SpinnerProps) {
  return <div className={s.spinner} style={{ minWidth: `${size}px`, height: `${size}px` }} />;
}
