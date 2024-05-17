import cx from 'clsx';

import { Tab as TabType, TabValues } from '@/types';

import s from './index.module.css';

interface TabProps {
  data: TabType;
  isSelected: boolean;
  onSelect: (name: TabValues) => void;
}

export default function Tab({ data, isSelected, onSelect }: TabProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      className={cx(s.tab, isSelected && s.selected)}
      onClick={() => onSelect(data.name)}
    >
      <data.Icon size={15} />
      <p>{data.name}</p>
    </div>
  );
}
