import BasketPromo from '../basket-promo/basket-promo.tsx';
import BasketSummeryOrder from '../basket-summery-order/basket-summery-order.tsx';

export default function BasketSummary () {
  return (
    <div className="basket__summary" data-testid="basket-summary">
      <BasketPromo />
      <BasketSummeryOrder />
    </div>
  );
}
