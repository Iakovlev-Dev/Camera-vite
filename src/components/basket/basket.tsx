import BasketList from '../basket-list/basket-list.tsx';
import BasketSummary from '../basket-summary/basket-summary.tsx';

export default function Basket () {
  return (
    <section className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <BasketList />
        <BasketSummary />
      </div>
    </section>
  );
}
