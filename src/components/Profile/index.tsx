import cx from 'clsx';

import defaultAvatarImage from '@/assets/images/default-avatar.png';

import { resourcesUrl } from '@/data/config';

import s from './index.module.css';

interface ProfileProps {
  imagePath: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Profile({ imagePath, name, size = 'md' }: ProfileProps) {
  const image = imagePath ? `${resourcesUrl}${imagePath}` : defaultAvatarImage;

  return (
    <div className={cx(s.wrapper, s[size])}>
      <div className={s.imageWrapper}>
        <img src={image} alt="profile" />
      </div>
      <span>{name}</span>
    </div>
  );
}
