import {useAppSelector} from '../../store/hooks.ts';
import {selectCamera} from '../../store/data-card-process/selectors.ts';
import CatalogCardRating from '../catalog-card-rating/catalog-card-rating.tsx';
import {Helmet} from 'react-helmet-async';
import {useState} from 'react';

export default function ProductCard () {
  const currentCamera = useAppSelector(selectCamera);
  const [isActiveTabList, setIsActiveTabList] = useState<boolean>(false);
  const [isActiveTabText, setIsActiveTabText] = useState<boolean>(true);

  const handleClick = () => {
    setIsActiveTabList(!isActiveTabList);
    setIsActiveTabText(!isActiveTabText);
  };

  return (currentCamera &&
    <>
      <Helmet>
        <title>{currentCamera.name}</title>
      </Helmet>
      <div className="page-content__section" data-testid="product-card">
        <section className="product">
          <div className="container">
            <div className="product__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/${currentCamera.previewImgWebp && currentCamera.previewImgWebp2x} 2x`}
                />
                <img
                  src={currentCamera.previewImgWebp}
                  srcSet={`${currentCamera.previewImg2x} 2x`}
                  width={560}
                  height={480}
                  alt={currentCamera.name}
                />
              </picture>
            </div>
            <div className="product__content">
              <h1 className="title title--h3">{currentCamera.name}</h1>
              <CatalogCardRating countRating={currentCamera.rating} countReviews={currentCamera.reviewCount}/>
              <p className="product__price">
                <span className="visually-hidden">Цена:</span>{currentCamera.price} ₽
              </p>
              <button className="btn btn--purple" type="button">
                <svg width={24} height={16} aria-hidden="true">
                  <use xlinkHref="#icon-add-basket"/>
                </svg>
                Добавить в корзину
              </button>
              <div className="tabs product__tabs">
                <div className="tabs__controls product__tabs-controls">
                  <button
                    className={`tabs__control ${isActiveTabList ? 'is-active' : ''}`}
                    type="button"
                    onClick={handleClick}
                  >
                    Характеристики
                  </button>
                  <button
                    className={`tabs__control ${isActiveTabText ? 'is-active' : ''}`}
                    type="button"
                    onClick={handleClick}
                  >
                    Описание
                  </button>
                </div>
                <div className="tabs__content">
                  <div className={`tabs__element ${isActiveTabList ? 'is-active' : ''}`}>
                    <ul className="product__tabs-list">
                      <li className="item-list">
                        <span className="item-list__title">Артикул:</span>
                        <p className="item-list__text"> {currentCamera.vendorCode}</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Категория:</span>
                        <p className="item-list__text">{currentCamera.category}</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Тип камеры:</span>
                        <p className="item-list__text">{currentCamera.type}</p>
                      </li>
                      <li className="item-list">
                        <span className="item-list__title">Уровень:</span>
                        <p className="item-list__text">{currentCamera.level}</p>
                      </li>
                    </ul>
                  </div>
                  <div className={`tabs__element ${isActiveTabText ? 'is-active' : ''}`}>
                    <div className="product__tabs-text">
                      <p>
                        {currentCamera.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>

  );
}
