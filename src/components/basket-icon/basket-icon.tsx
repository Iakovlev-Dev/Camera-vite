import {useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

export default function BasketIcon () {
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  return (
    <Link className="header__basket-link" to={AppRoute.Card} data-testid="basket-icon-test">
      <svg width={16} height={16} aria-hidden="true">
        <use xlinkHref="#icon-basket"/>
      </svg>
      {
        camerasIdBasket.length === 0 ? '' :
          <span className="header__basket-count">{camerasIdBasket.length}</span>
      }
    </Link>
  );
}
