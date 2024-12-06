import {Link} from 'react-router-dom';
import {AppRoute} from '../../const.ts';

type TCCatalogModalAddItemSuccess = {
  onClose: () => void;
}

export default function CatalogModalAddItemSuccess({onClose}: TCCatalogModalAddItemSuccess) {
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
              onClick={onClose}
            >
              Продолжить покупки
            </Link>
            <Link className="btn btn--purple modal__btn modal__btn--fit-width" to={AppRoute.Card} onClick={onClose}>
              Перейти в корзину
            </Link>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={onClose}>
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
