import { useNavigate } from 'react-router-dom';

import fallbackImage from '@/assets/images/default-fallback.png';

import Button from '@/components/Button';
import Rating from '@/components/Rating';

import { resourcesUrl } from '@/data/config/resources';
import s from './index.module.css';
import { formatDecimalNumber } from '@/utils/formatDecimalNumber';

interface CardProps {
  id: number;
  title: string;
  description: string;
  dateReleased: string;
  image: string | null;
  rating: number;
  type: string;
}

export default function Card({
  id,
  title,
  description,
  dateReleased,
  image,
  rating,
  type,
}: CardProps) {
  const coverImageUrl = image ? `${resourcesUrl}${image}` : fallbackImage;
  const releaseYear = dateReleased.split('-')[0];
  const formattedRating = rating ? formatDecimalNumber(rating) : null;

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detailed/${id}?type=${type}`);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.imageContainer}>
        <img src={coverImageUrl} alt={title} loading="lazy" />
      </div>

      <div className={s.body}>
        <div className={s.titleContainer}>
          <span className={s.title}>{title}</span>
          {!!releaseYear && <span>({releaseYear})</span>}
        </div>

        <p className={s.lineClamp}>{description}</p>

        <div className={s.bottom}>
          <Button onClick={handleNavigate} size="md" style={{ flex: '1' }}>
            View
          </Button>

          {!!formattedRating && <Rating>{formattedRating}</Rating>}
        </div>
      </div>
    </div>
  );
}
