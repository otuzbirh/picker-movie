import notFoundImage from '@/assets/images/404-page-not-found.svg';
import s from './index.module.css';

export default function NotFound() {
  return (
    <div className={s.wrapper}>
      <img src={notFoundImage} alt="Not found" />
    </div>
  );
}
