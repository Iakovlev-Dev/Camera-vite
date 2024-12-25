import {TCameraCard} from '../../types/type-cards.ts';
import CatalogCardRating from '../catalog-card-rating/catalog-card-rating.tsx';
import {APIRoute} from '../../const.ts';
import {Link} from 'react-router-dom';
import {isCameraInBasket} from '../../utils/utils.ts';
import ButtonInBasket from '../button-in-basket/button-in-basket.tsx';
import ButtonBuy from '../button-buy/button-buy.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';

type TProductCardSimilar = {
  camera: TCameraCard;
  onClick: (id: number) => void;
}

export default function ProductCardSimilar ({camera, onClick}: TProductCardSimilar) {

  const pathToLink = `${APIRoute.Cameras}/${camera.id}`;
  const basket = useAppSelector(selectCamerasIdBasket);

  const handleClickModal = (id: number) => {
    onClick(id);
  };

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
        {
          isCameraInBasket(basket, camera.id) ? <ButtonInBasket /> : <ButtonBuy onClick={handleClickModal} card={camera}/>
        }
        <Link className="btn btn--transparent" to={pathToLink}>
          Подробнее
        </Link>
      </div>
    </div>
  );
}
