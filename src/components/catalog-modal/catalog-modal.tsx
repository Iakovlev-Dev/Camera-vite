import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import ReactFocusLock from 'react-focus-lock';
import React, {ChangeEvent, useState} from 'react';
import {isValidPhoneNumber, parsePhoneNumber, validatePhoneNumberLength} from 'libphonenumber-js';
import {postOrder} from '../../store/api-actions.ts';
import {TOrder} from '../../types/type-order.ts';

type TCatalogModal = {
  idCamera: number;
  onClose: () => void;
}

export default function CatalogModal({onClose, idCamera}: TCatalogModal) {
  const cameras = useAppSelector(selectCameras);

  const currentCamera = cameras.find((camera) => camera.id === idCamera);

  const [tel, setTel] = useState('');
  const [style, setStyle] = useState({opacity: 0});

  const handleChangeTel = (evt: ChangeEvent<HTMLInputElement>) => {
    setTel(evt.target.value);
  };

  const handleSubmitTelNumber = (number: string, evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      const parseTel = parsePhoneNumber(number, 'RU');
      if (isValidPhoneNumber(parseTel.number, 'RU') && validatePhoneNumberLength(parseTel.number, 'RU') === undefined) {
        const body: TOrder = {
          tel: parseTel.number,
          coupon: 'asda',
          camerasIds: [1]
        };
        setTel('');
        setStyle({opacity: 0});
        postOrder(body);
        onClose();
      } else {
        setStyle({opacity: 1});
      }
    } catch (err) {
      setStyle({opacity: 1});
    }
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
                    name="user-tel"
                    placeholder="Введите ваш номер"
                    maxLength={16}
                    required
                    value={tel}
                    onChange={handleChangeTel}
                    autoComplete='false'
                  />
                </label>
                <p className="custom-input__error" style={style}>Нужно указать номер</p>
              </div>
              <div className="modal__buttons">
                <form
                  method='POST'
                  onSubmit={(evt) => handleSubmitTelNumber(tel, evt)}
                >
                  <button
                    className="btn btn--purple modal__btn modal__btn--fit-width"
                    type="submit"
                  >
                    <svg width={24} height={16} aria-hidden="true">
                      <use xlinkHref="#icon-add-basket"/>
                    </svg>
                    Заказать
                  </button>
                </form>

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
