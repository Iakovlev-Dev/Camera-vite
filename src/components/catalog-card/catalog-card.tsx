import {TCameraCard} from '../../types/type-cards.ts';
import CatalogCardRating from '../catalog-card-rating/catalog-card-rating.tsx';
import {Link} from 'react-router-dom';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';
import ButtonBuy from '../button-buy/button-buy.tsx';
import ButtonToBasket from '../button-to-basket/button-to-basket.tsx';

type TCatalogCard = {
  card: TCameraCard;
  onClick: (id: number) => void;
}

export default function CatalogCard({card, onClick}: TCatalogCard) {
  const pathCard = `/cameras/${card.id}`;
  const handleClickModal = (id: number) => {
    onClick(id);
  };

  const basket = useAppSelector(selectCamerasIdBasket)
  const isCameraInBasket = (arr: number[], item: number) => arr.includes(item)

  return (
    <div className="product-card" data-testid="catalog-card">
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
        {
         isCameraInBasket(basket, card.id) ? <ButtonToBasket /> : <ButtonBuy onClick={handleClickModal} card={card}/>
        }
        <Link
          className="btn btn--transparent"
          to={pathCard}
        >
          Подробнее
        </Link>
      </div>
    </div>
  );
}
