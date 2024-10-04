import {TCameraCard} from '../../types/type-cards.ts';
import CatalogCardRating from '../catalog-card-rating/catalog-card-rating.tsx';

type TCatalogCard = {
  card: TCameraCard;
  onClick: () => void;
}

export default function CatalogCard({card, onClick}: TCatalogCard) {
  return (
    <div className="product-card">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${card.previewImgWebp && card.previewImgWebp2x} 2x`}
          />
          <img
            src={`/${card.previewImg}`}
            srcSet={`/${card.previewImg2x} 2x`}
            width={280}
            height={240}
            alt={card.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <CatalogCardRating countRating={card.rating} countReviews={card.reviewCount} />
        <p className="product-card__title">
          {card.name}
        </p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{card.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
          onClick={onClick}
        >
          Купить
        </button>
        <a className="btn btn--transparent" href="#">
          Подробнее
        </a>
      </div>
    </div>
  );
}
