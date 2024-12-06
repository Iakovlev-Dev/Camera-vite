import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import ReactFocusLock from 'react-focus-lock';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';
import {TCameraCard} from '../../types/type-cards.ts';
import {setCamerasBasket} from '../../store/basket-process/basket-process.ts';

type TCatalogModal = {
  idCamera: number;
  onClose: () => void;
  onAddItem: () => void;
}

export default function CatalogModal({onClose, idCamera, onAddItem}: TCatalogModal) {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(selectCameras);
  const currentCamera = cameras.find((camera) => camera.id === idCamera);
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  const handleAddToBasket = (camera: TCameraCard) => {
    const newArr: number[] = [...camerasIdBasket];
    newArr.push(camera.id);
    dispatch(setCamerasBasket(newArr));
    onAddItem();
  };

  if(!currentCamera) {
    return null;
  }

  return (currentCamera &&
      <ReactFocusLock>
        <div className="modal is-active" data-testid="catalog-modal">
          <div className="modal__wrapper">
            <div className="modal__overlay"/>
            <div className="modal__content">
              <p className="title title--h4">Добавить товар в корзину</p>
              <div className="basket-item basket-item--short">
                <div className="basket-item__img">
                  <picture>
                    <source
                      type="image/webp"
                      srcSet={`${currentCamera.previewImgWebp && currentCamera.previewImgWebp2x} 2x`}
                    />
                    <img
                      src={`${currentCamera.previewImg}`}
                      srcSet={`${currentCamera.previewImg2x} 2x`}
                      width={140}
                      height={120}
                      alt={currentCamera.name}
                    />
                  </picture>
                </div>
                <div className="basket-item__description">
                  <p className="basket-item__title">{currentCamera.name}</p>
                  <ul className="basket-item__list">
                    <li className="basket-item__list-item">
                      <span className="basket-item__article">Артикул:</span>{' '}
                      <span className="basket-item__number">{currentCamera.vendorCode}</span>
                    </li>
                    <li className="basket-item__list-item">{currentCamera.category}</li>
                    <li className="basket-item__list-item">{currentCamera.level}</li>
                  </ul>
                  <p className="basket-item__price">
                    <span className="visually-hidden">Цена:</span>{currentCamera.price} ₽
                  </p>
                </div>
              </div>
              <div className="modal__buttons">
                <button
                  className="btn btn--purple modal__btn modal__btn--fit-width"
                  type="button"
                  onClick={() => handleAddToBasket(currentCamera)}
                >
                  <svg width={24} height={16} aria-hidden="true">
                    <use xlinkHref="#icon-add-basket"/>
                  </svg>
                    Добавить в корзину
                </button>
              </div>
              <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
                <svg width={10} height={10} aria-hidden="true">
                  <use xlinkHref="#icon-close"/>
                </svg>
              </button>

            </div>
          </div>
        </div>
      </ReactFocusLock>
  );
}
