import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {useForm} from 'react-hook-form';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {selectCamerasIdBasket, selectSumOrder} from '../../store/basket-process/selectors.ts';
import {selectPromo} from '../../store/promo-process/selectors.ts';
import {getDiscount} from '../../utils/utils.ts';
import classNames from 'classnames';
import {TOrder} from '../../types/type-order.ts';
import {postOrder} from '../../store/api-actions.ts';

export default function BasketSummeryOrder() {
  const dispatch = useAppDispatch();
  const {handleSubmit} = useForm();

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
  const sumDiscount = (sumOrderToDiscount * (discount / 100)).toFixed(2);

  const classNameDiscount = classNames(
    'basket__summary-value', {
      'basket__summary-value--bonus': +sumDiscount > 0
    });

  const onSubmitOrder = () => {
    const orderToPost: TOrder = {
      camerasIds: idCamerasBasket,
      coupon: null,
    };
    dispatch(postOrder(orderToPost));
  };

  return (
    <div className="basket__summary-order">
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form method='post' onSubmit={handleSubmit(onSubmitOrder)}>
        <p className="basket__summary-item">
          <span className="basket__summary-text">Всего:</span>
          <span className="basket__summary-value">{idCamerasBasket.length ? sumOrder : '0'} ₽</span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text">Скидка:</span>
          <span className={classNameDiscount}>
            {idCamerasBasket.length ? sumDiscount : '0'} ₽
          </span>
        </p>
        <p className="basket__summary-item">
          <span className="basket__summary-text basket__summary-text--total">
                  К оплате:
          </span>
          <span className="basket__summary-value basket__summary-value--total">
            {idCamerasBasket.length ? sumOrder - +sumDiscount : '0'} ₽
          </span>
        </p>
        <button
          className="btn btn--purple"
          type="submit"
          disabled={!idCamerasBasket.length}
        >
          Оформить заказ
        </button>
      </form>
    </div>
  );
}
