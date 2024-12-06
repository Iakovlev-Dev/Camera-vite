import {TCameraCard} from '../../types/type-cards.ts';

type TButtonBuy = {
  onClick: (id: number) => void;
  card: TCameraCard;
}

export default function ButtonBuy ({onClick, card}: TButtonBuy) {
  return (
    <button
      className="btn btn--purple product-card__btn"
      type="button"
      onClick={() => onClick(card.id)}
    >
      Купить
    </button>
  );
}
