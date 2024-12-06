import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

export default function ButtonInBasket () {
  return (
    <Link
      className="btn btn--purple-border product-card__btn product-card__btn--in-cart"
      to={AppRoute.Card}
    >
      <svg width={16} height={16} aria-hidden="true">
        <use xlinkHref="#icon-basket"/>
      </svg>
      В корзине
    </Link>

  )
}
