import {useEffect} from 'react';

type TReviewAddSuccessModal = {
  onClose: (bool: boolean) => void;
}

export default function ReviewAddSuccessModal ({onClose}: TReviewAddSuccessModal) {

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
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success"/>
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={() => {
                onClose(false);
              }}
            >
              Вернуться к покупкам
            </button>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => onClose(false)}
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
