import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import ReactFocusLock from 'react-focus-lock';
import {parsePhoneNumber} from 'libphonenumber-js';
import {SubmitHandler, useForm} from 'react-hook-form';
import {postOrder} from '../../store/api-actions.ts';
import {TOrder} from '../../types/type-order.ts';

type TCatalogModal = {
  idCamera: number;
  onClose: () => void;
}

type TFormValues = {
  userTel: string;
}

export default function CatalogModal({onClose, idCamera}: TCatalogModal) {
  const dispatch = useAppDispatch();
  const cameras = useAppSelector(selectCameras);
  const currentCamera = cameras.find((camera) => camera.id === idCamera);

  const {register, handleSubmit, formState: {errors}} = useForm<TFormValues>();

  const onSubmit: SubmitHandler<TFormValues> = (data: TFormValues, evt) => {
    evt?.preventDefault();

    const userNumber = parsePhoneNumber(data.userTel, 'RU').number;
    const body: TOrder = {
      tel: userNumber,
      coupon: null,
      camerasIds: [idCamera]
    };

    dispatch(postOrder(body));
    onClose();
  };

  if(!currentCamera) {
    return null;
  }

  return (currentCamera &&
      <ReactFocusLock>
        <div className="modal is-active">
          <div className="modal__wrapper">
            <div className="modal__overlay"/>
            <div className="modal__content">
              <p className="title title--h4">Свяжитесь со мной</p>
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
              <form
                method='post'
                onSubmit={(evt) => void handleSubmit(onSubmit)(evt)}
              >
                <div className="custom-input form-review__item">
                  <label>
                    <span className="custom-input__label">
                 Телефон
                      <svg width={9} height={9} aria-hidden="true">
                        <use xlinkHref="#icon-snowflake"/>
                      </svg>
                    </span>
                    <input
                      type="tel"
                      placeholder="Введите ваш номер"
                      maxLength={16}
                      required
                      {...register('userTel', {
                        required: 'Нужно указать номер',
                        pattern: {
                          value: /^(\+7|8)\s*\(?9\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
                          message: 'Введите номер +7(9XX)XXX-XX-XX'
                        }
                      })}
                    />
                  </label>
                  {errors.userTel && <p className="custom-input__error" style={{opacity: 1}}>{errors.userTel.message}</p>}
                </div>
                <div className="modal__buttons">
                  <button
                    className="btn btn--purple modal__btn modal__btn--fit-width"
                    type="submit"
                  >
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"/>
                    </svg>
                    Заказать
                  </button>
                </div>
              </form>
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
