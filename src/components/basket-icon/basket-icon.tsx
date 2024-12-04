import {useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';

export default function BasketIcon () {
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  return (
    <a className="header__basket-link" href="#">
      <svg width={16} height={16} aria-hidden="true">
        <use xlinkHref="#icon-basket"/>
      </svg>
      {
        camerasIdBasket.length === 0 ? '' :
          <span className="header__basket-count">{camerasIdBasket.length}</span>
      }
    </a>
  );
}
