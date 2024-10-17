import {TCameraCard} from '../../types/type-cards.ts';
import CatalogCardRating from '../catalog-card-rating/catalog-card-rating.tsx';
import {APIRoute} from '../../const.ts';
import {Link} from 'react-router-dom';

type TProductCardSimilar = {
  camera: TCameraCard;
}

export default function ProductCardSimilar ({camera}: TProductCardSimilar) {

  const pathToLink = `${APIRoute.Cameras}/${camera.id}`;

  return (
    <div className="product-card is-active">
      <div className="product-card__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${camera.previewImgWebp}, ${camera.previewImgWebp2x} 2x`}
          />
          <img
            src={camera.previewImg}
            srcSet={`${camera.previewImg2x} 2x`}
            width={280}
            height={240}
            alt={camera.name}
          />
        </picture>
      </div>
      <div className="product-card__info">
        <CatalogCardRating countRating={camera.rating} countReviews={camera.reviewCount} />
        <p className="product-card__title">{camera.name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>{camera.price} ₽
        </p>
      </div>
      <div className="product-card__buttons">
        <button
          className="btn btn--purple product-card__btn"
          type="button"
        >
          Купить
        </button>
        <Link className="btn btn--transparent" to={pathToLink}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
