import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';
import {useEffect} from 'react';

type TCCatalogModalAddItemSuccess = {
  onClose: (bool?: boolean) => void;
}

export default function CatalogModalAddItemSuccess({onClose}: TCCatalogModalAddItemSuccess) {
  type TEventKey = {
    key: string;
    preventDefault: () => void;
  }

  useEffect(() => {
    const handleEscClick = (evt: TEventKey) => {
      if (evt.key === 'Escape') {
        onClose(false);
        document.body.classList.remove('scroll-lock');
      }
    };

    const handleOverlayClick = (evt: MouseEvent) => {
      if ((evt.target as HTMLElement).className === 'modal__overlay') {
        onClose(false);
        document.body.classList.remove('scroll-lock');
      }
    };
    document.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('keydown', handleEscClick);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [onClose]);

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"/>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width={86} height={80} aria-hidden="true">
            <use xlinkHref="#icon-success"/>
          </svg>
          <div className="modal__buttons">
            <Link
              className="btn btn--transparent modal__btn"
              to={AppRoute.Main}
              onClick={() => onClose()}
            >
              Продолжить покупки
            </Link>
            <Link className="btn btn--purple modal__btn modal__btn--fit-width" to={AppRoute.Card} onClick={() => onClose()}>
              Перейти в корзину
            </Link>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => onClose()}>
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
