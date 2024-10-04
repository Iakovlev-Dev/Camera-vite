import {TCameraCard} from '../../types/type-cards.ts';

type TCatalogCard = {
  card: TCameraCard;
}

export default function CatalogCard({card}: TCatalogCard) {
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
        <div className="rate product-card__rate">
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star"/>
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star"/>
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-full-star"/>
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-star"/>
          </svg>
          <svg width={17} height={16} aria-hidden="true">
            <use xlinkHref="#icon-star"/>
          </svg>
          <p className="visually-hidden">Рейтинг: {card.rating}</p>
          <p className="rate__count">
            <span className="visually-hidden">Всего оценок:</span>{card.reviewCount}
          </p>
        </div>
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
