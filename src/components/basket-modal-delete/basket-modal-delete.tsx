import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {selectCamerasIdBasket, selectDeleteIdCamera} from '../../store/basket-process/selectors.ts';
import {useEffect} from 'react';
import {setCamerasBasket, setIsDeleteCamera} from '../../store/basket-process/basket-process.ts';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {redirectToRote} from '../../store/action.ts';

export default function BasketModalDelete() {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(selectCameras);
  const idDeletingCamera = useAppSelector(selectDeleteIdCamera);
  const currentCamera = cameras.find((item) => item.id === idDeletingCamera);
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);


  type TEventKey = {
    key: string;
    preventDefault: () => void;
  }

  useEffect(() => {
    const handleEscClick = (evt: TEventKey) => {
      if (evt.key === 'Escape') {
        dispatch(setIsDeleteCamera(false));
        document.body.classList.remove('scroll-lock');
      }
    };

    const handleOverlayClick = (evt: MouseEvent) => {
      if ((evt.target as HTMLElement).className === 'modal__overlay') {
        dispatch(setIsDeleteCamera(false));
        document.body.classList.remove('scroll-lock');
      }
    };
    document.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('keydown', handleEscClick);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [dispatch, idDeletingCamera]);

  const handleClickDelete = (id: number) => {
    const sortedCamerasId = [...camerasIdBasket].sort((a, b) => a - b);
    const newArr = [...sortedCamerasId];
    const index = sortedCamerasId.indexOf(id);
    const countCameras = camerasIdBasket.filter((item) => item === id).length;
    newArr.splice(index, countCameras);
    dispatch(setCamerasBasket(newArr));
    dispatch(setIsDeleteCamera(false));
    if(newArr.length === 0) {
      dispatch(redirectToRote(AppRoute.Main));
    }
  };

  if(!currentCamera) {
    return null;
  }

  if(!idDeletingCamera) {
    return null;
  }

  return (
    <div className="modal is-active" data-testid="basket-modal-delete">
      <div className="modal__wrapper">
        <div className="modal__overlay"/>
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/${currentCamera.previewImgWebp && currentCamera.previewImgWebp2x } 2x`}
                />
                <img
                  src={`/${currentCamera.previewImg}`}
                  srcSet={`/${currentCamera.previewImgWebp2x} 2x`}
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
                <li className="basket-item__list-item">{currentCamera.type}</li>
                <li className="basket-item__list-item">{currentCamera.level}</li>
              </ul>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--half-width"
              type="button"
              onClick={() => handleClickDelete(idDeletingCamera)}
            >
              Удалить
            </button>
            <Link
              className="btn btn--transparent modal__btn modal__btn--half-width"
              to={AppRoute.Main}
            >
              Продолжить покупки
            </Link>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => dispatch(setIsDeleteCamera(false))}
          >
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
