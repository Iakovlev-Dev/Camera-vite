import {TPromo} from '../../types/type-promo.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {APIRoute} from '../../const.ts';
import {Link} from 'react-router-dom';

type TBannerPromo = {
  promo: TPromo;
}

export default function BannerPromo ({promo}: TBannerPromo) {
  const cards = useAppSelector(selectCameras);
  const currentCamera = cards.find((item) => item.id === promo.id);
  const pathToLink = `${APIRoute.Cameras}/${promo.id}`;

  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          srcSet={`${promo.previewImgWebp}, ${promo.previewImgWebp2x} 2x`}
        />
        <img
          src={promo.previewImg}
          srcSet={`${promo.previewImg2x} 2x`}
          width={1280}
          height={280}
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">
          {promo.name}
        </span>
        <span className="banner__text">
          {currentCamera?.description}
        </span>
        <Link className="btn" to={pathToLink}>
          Подробнее
        </Link>
      </p>
    </div>
  );
}
