import { IconSearch } from '@tabler/icons-react';

import Spinner from '@/components/Loaders/Spinner';

import { useDataLoader } from '@/hooks';

import s from './index.module.css';

export default function Search() {
  const {
    data: { searchTerm, isLoading },
    handlers: { handleSearch },
  } = useDataLoader();

  return (
    <div className={s.wrapper}>
      <IconSearch size={16} />
      <input
        placeholder="Search..."
        defaultValue={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
      {isLoading && <Spinner />}
    </div>
  );
}
