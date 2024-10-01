import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

export default function Logo () {
  return (
    <Link
      className="header__logo"
      to={AppRoute.Main}
      aria-label="Переход на главную"
    >
      <svg width={100} height={36} aria-hidden="true">
        <use xlinkHref="#icon-logo"/>
      </svg>
    </Link>
  );
}
