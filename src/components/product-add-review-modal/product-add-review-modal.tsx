import {useState} from 'react';
import ProductRateReview from '../product-rate-review/product-rate-review.tsx';
import {SubmitHandler, useForm} from 'react-hook-form';
import classNames from 'classnames';
import {useParams} from 'react-router-dom';
import {useAppDispatch, useCloseModal} from '../../store/hooks.ts';
import {postReview} from '../../store/api-actions.ts';
import {MAX_SYMBOLS_REVIEW, MAX_SYMBOLS_USERNAME, MIN_SYMBOLS_REVIEW, MIN_SYMBOLS_USERNAME} from '../../const.ts';

type TProductAddReviewModal = {
  onCloseModal: (bool: boolean) => void;
}

export type TReviewPost = {
  cameraId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
}


export default function ProductAddReviewModal ({onCloseModal}: TProductAddReviewModal) {
  const dispatch = useAppDispatch();

  const {handleSubmit, register, formState: {errors}, watch} = useForm<TReviewPost>();

  const {id} = useParams();

  const [ratingStars, setRatingStars] = useState<string>('');

  useCloseModal(onCloseModal)

  if(!id) {
    return null;
  }

  const handleSubmitReview: SubmitHandler<TReviewPost> = (data) => {
    const postBody = {
      userName: data.userName,
      advantage: data.advantage,
      disadvantage: data.disadvantage,
      review: data.review,
      rating: Number(data.rating),
      cameraId: +id
    };

    dispatch(postReview(postBody));
    onCloseModal(false);
  };

  const userName = watch('userName', '');
  const userRating = watch('rating', 0);
  const userAdvantage = watch('advantage', '');
  const userDisadvantage = watch('disadvantage', '');
  const userReview = watch('review', '');


  const customInputUserName = classNames(
    'custom-input form-review__item', {
      'is-invalid': errors.userName,
      'is-valid': userName.length >= MIN_SYMBOLS_USERNAME && !errors.userName,
      '': !userName && !errors.userName,
    }
  );

  const customInputRate = classNames(
    'rate form-review__item', {
      'is-invalid': errors.rating,
      '': !userRating && !errors.rating,
    }
  );

  const customInputAdvantage = classNames(
    'custom-input form-review__item', {
      'is-invalid': errors.advantage,
      'is-valid': userAdvantage.length >= MIN_SYMBOLS_REVIEW && !errors.advantage,
      '': !userAdvantage && !errors.advantage
    }
  );

  const customInputDisadvantage = classNames(
    'custom-input form-review__item', {
      'is-invalid': errors.disadvantage,
      'is-valid': userDisadvantage.length >= MIN_SYMBOLS_REVIEW && !errors.disadvantage,
      '': !userDisadvantage && !errors.disadvantage
    }
  );

  const customInputReview = classNames(
    'custom-textarea form-review__item', {
      'is-invalid': errors.review,
      'is-valid': userReview.length >= MIN_SYMBOLS_REVIEW && !errors.review,
      '': !userReview && !errors.review
    }
  );

  return (
    <div className="modal is-active">
      <div className="modal__wrapper">
        <div className="modal__overlay"/>
        <div className="modal__content">
          <p className="title title--h4">Оставить отзыв</p>
          <div className="form-review">
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form method="post" onSubmit={handleSubmit(handleSubmitReview)}>
              <div className="form-review__rate">
                <fieldset className={customInputRate}>
                  <legend className="rate__caption">
                    Рейтинг
                    <svg width={9} height={9} aria-hidden="true">
                      <use xlinkHref="#icon-snowflake"/>
                    </svg>
                  </legend>
                  <div className="rate__bar">
                    <ProductRateReview onChange={setRatingStars} register={register}/>
                    <div className="rate__progress">
                      <span className="rate__stars">{+ratingStars}</span> <span>/</span>{' '}
                      <span className="rate__all-stars">5</span>
                    </div>
                  </div>
                  <p className="rate__message">Нужно оценить товар</p>
                </fieldset>
                <div className={customInputUserName}>
                  <label>
                    <span className="custom-input__label">
                  Ваше имя
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Введите ваше имя"
                      {...register('userName', {
                        required: true,
                        minLength: MIN_SYMBOLS_USERNAME,
                        maxLength: MAX_SYMBOLS_USERNAME
                      })}
                      autoComplete="off"
                      autoFocus
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать имя</p>
                </div>
                <div className={customInputAdvantage}>
                  <label>
                    <span className="custom-input__label">
                  Достоинства
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Основные преимущества товара"
                      {...register('advantage', {
                        required: true,
                        minLength: MIN_SYMBOLS_REVIEW,
                        maxLength: MAX_SYMBOLS_REVIEW
                      })}
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать достоинства</p>
                </div>
                <div className={customInputDisadvantage}>
                  <label>
                    <span className="custom-input__label">
                  Недостатки
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"/>
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Главные недостатки товара"
                      {...register('disadvantage', {
                        required: true,
                        minLength: MIN_SYMBOLS_REVIEW,
                        maxLength: MAX_SYMBOLS_REVIEW
                      })}
                    />
                  </label>
                  <p className="custom-input__error">Нужно указать недостатки</p>
                </div>
                <div className={customInputReview}>
                  <label>
                    <span className="custom-textarea__label">
                  Комментарий
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"/>
                      </svg>
                    </span>
                    <textarea
                      placeholder="Поделитесь своим опытом покупки"
                      {...register('review', {
                        required: true,
                        minLength: MIN_SYMBOLS_REVIEW,
                        maxLength: MAX_SYMBOLS_REVIEW
                      })}

                    />
                  </label>
                  <div className="custom-textarea__error">
                    Нужно добавить комментарий
                  </div>
                </div>
              </div>
              <button className="btn btn--purple form-review__btn" type="submit">
                Отправить отзыв
              </button>
            </form>
          </div>
          <button
            className="cross-btn"
            type="button"
            aria-label="Закрыть попап"
            onClick={() => onCloseModal(false)}
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
