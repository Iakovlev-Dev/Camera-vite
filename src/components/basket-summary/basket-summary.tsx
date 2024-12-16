import BasketPromo from '../basket-promo/basket-promo.tsx';
import BasketSummerOrder from '../basket-summery-order/basket-summery-order.tsx';

export default function BasketSummary () {
  return (
    <div className="basket__summary">
      <BasketPromo />
      <BasketSummerOrder />
    </div>
  );
}
