import {useAppDispatch} from '../../store/hooks.ts';
import {setOrderPostSuccess} from '../../store/basket-process/basket-process.ts';
import {redirectToRote} from '../../store/action.ts';
import {AppRoute} from '../../const.ts';

export default function BasketSuccessOrder() {
  const dispatch = useAppDispatch();

  const handleCloseModal = () => {
    dispatch(setOrderPostSuccess(false));
    dispatch(redirectToRote(AppRoute.Main));
  };
  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"/>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за покупку</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success"/>
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={handleCloseModal}
            >
              Вернуться к покупкам
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={handleCloseModal}
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
