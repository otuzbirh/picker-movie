import { TablerIconsProps } from '@tabler/icons-react';

export type TabValues = 'Movies' | 'TV shows';

export interface Tab {
  Icon: (props: TablerIconsProps) => JSX.Element;
  name: TabValues;
}
