import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {setIsErrorPostBasket, setOrderPostSuccess} from '../../store/basket-process/basket-process.ts';
import {redirectToRote} from '../../store/action.ts';
import {AppRoute} from '../../const.ts';
import {selectIsErrorPostBasket, selectIsOrderPostSuccess} from '../../store/basket-process/selectors.ts';
import React, {useEffect} from 'react';

export default function BasketSuccessOrder() {
  const dispatch = useAppDispatch();
  const isSuccessPost = useAppSelector(selectIsOrderPostSuccess);
  const isErrorPost = useAppSelector(selectIsErrorPostBasket);

  const handleCloseModal = (evt?: React.MouseEvent<HTMLButtonElement>) => {
    if (isSuccessPost) {
      dispatch(setOrderPostSuccess(false));
      dispatch(redirectToRote(AppRoute.Main));
    } else if (isErrorPost) {
      dispatch(setIsErrorPostBasket(false));
      if(evt?.currentTarget.name === 'Вернуться к покупкам') {
        dispatch(redirectToRote(AppRoute.Main));
      }
    }
  };

  type TEventKey = {
    key: string;
    preventDefault: () => void;
  }

  useEffect(() => {
    const handleEscClick = (evt: TEventKey) => {
      if (evt.key === 'Escape') {
        if(isSuccessPost) {
          dispatch(setOrderPostSuccess(false));
          dispatch(redirectToRote(AppRoute.Main));
        } else {
          dispatch(setIsErrorPostBasket(false));
        }
        document.body.classList.remove('scroll-lock');
      }
    };

    const handleOverlayClick = (evt: MouseEvent) => {
      if ((evt.target as HTMLElement).className === 'modal__overlay') {
        if (isSuccessPost) {
          dispatch(setOrderPostSuccess(false));
          dispatch(redirectToRote(AppRoute.Main));
        } else {
          dispatch(setIsErrorPostBasket(false));
        }
        document.body.classList.remove('scroll-lock');
      }
    };
    document.addEventListener('click', handleOverlayClick);
    document.addEventListener('keydown', handleEscClick);
    return () => {
      document.removeEventListener('keydown', handleEscClick);
      document.removeEventListener('click', handleOverlayClick);
    };
  }, [dispatch, isSuccessPost]);

  return (
    <div className="modal is-active modal--narrow">
      <div className="modal__wrapper">
        <div className="modal__overlay"/>
        <div className="modal__content">
          {isSuccessPost ?
            <>
              <p className="title title--h4">Спасибо за покупку</p>
              <svg className="modal__icon" width={80} height={78} aria-hidden="true">
                <use xlinkHref="#icon-review-success"/>
              </svg>
            </>
            : ''}
          {isErrorPost ? <p className="title title--h4">Произошла ошибка. Попробуйте позже</p> : ''}
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              name="Вернуться к покупкам"
              onClick={(evt) => handleCloseModal(evt)}
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
