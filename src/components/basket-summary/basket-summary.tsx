import {useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket, selectSumOrder} from '../../store/basket-process/selectors.ts';
import {selectPromo} from '../../store/promo-process/selectors.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {getDiscount} from '../../utils/utils.ts';
import classNames from 'classnames';

export default function BasketSummary () {
  const cameras = useAppSelector(selectCameras);
  const sumOrder = useAppSelector(selectSumOrder);
  const idCamerasBasket = useAppSelector(selectCamerasIdBasket);
  const promo = useAppSelector(selectPromo);
  const promoId = promo.map((item) => item.id);
  const idCamerasToDiscount = idCamerasBasket.filter((id) => !promoId.includes(id));
  const sumOrderToDiscount = idCamerasToDiscount.reduce((sum, id) => {
    const item = cameras.find((camera) => camera.id === id);
    return item ? sum + item.price : sum;
  }, 0);

  const discount = getDiscount(idCamerasToDiscount, sumOrderToDiscount);
  const sumDiscount = sumOrderToDiscount * (discount / 100);

  const classNameDiscount = classNames(
    'basket__summary-value', {
      'basket__summary-value--bonus': sumDiscount > 0
    });

  return (
    <div className="basket__summary">
      <div className="basket__summary-order">
        <p className="basket__summary-item">
          <span className="basket__summary-text">Всего:</span>
          <span className="basket__summary-value">{sumOrder} ₽</span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text">Скидка:</span>
          <span className={classNameDiscount}>
            {sumDiscount} ₽
          </span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text basket__summary-text--total">
                  К оплате:
          </span>
          <span className="basket__summary-value basket__summary-value--total">
            {sumOrder - sumDiscount} ₽
          </span>
        </p>
        <button className="btn btn--purple" type="submit">
          Оформить заказ
        </button>
      </div>
    </div>
  );
}
