import Tab from '@/components/Tabs/SingleTab';
import { Tab as TabType, TabValues } from '@/types';

import s from './index.module.css';

interface TabsProps {
  tabs: TabType[];
  selectedTab: string;
  onSelect: (name: TabValues) => void;
}

export default function Tabs({ tabs, selectedTab, onSelect }: TabsProps) {
  return (
    <div className={s.wrapper}>
      {tabs.map((item, index) => (
        <Tab key={index} data={item} onSelect={onSelect} isSelected={selectedTab === item.name} />
      ))}
    </div>
  );
}
