import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';
import {
  setCamerasBasket,
  setDeleteIdCamera,
  setIsDeleteCamera, setSumOrder,
} from '../../store/basket-process/basket-process.ts';
import {removeElement} from '../../utils/utils.ts';
import {MAX_CAMERAS_IN_BASKET, MIN_CAMERAS_IN_BASKET, OVER_CAMERAS} from '../../const.ts';
import React, {useEffect, useState} from 'react';

type TBasketItemCamera = {
  idCamera: number;
}

export default function BasketItemCamera ({idCamera}: TBasketItemCamera) {
  const dispatch = useAppDispatch();
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  const cameras = useAppSelector(selectCameras);
  const currentCamera = cameras.find((item) => item.id === idCamera);
  const sortedCamerasId = [...camerasIdBasket].sort((a, b) => a - b);

  const countCameras = camerasIdBasket.filter((item) => item === idCamera).length;

  const [count, setCount] = useState(String(countCameras));
  const [prevCount, setPrevCount] = useState(countCameras);

  const sumOrder = sortedCamerasId.reduce((sum, id) => {
    const item = cameras.find((camera) => camera.id === id);
    return item ? sum + item.price : sum;
  }, 0);

  useEffect(() => {
    dispatch(setSumOrder(sumOrder));
  }, [dispatch, sumOrder]);

  const handleCountIncrease = (id: number) => {
    setCount(String(Number(count) + 1));
    dispatch(setCamerasBasket([...camerasIdBasket, id]));
  };

  const handleCountDecrease = (id: number) => {
    setCount(String(Number(count) - 1));
    const newIdBasket = removeElement(camerasIdBasket, id);
    dispatch(setCamerasBasket(newIdBasket));
  };

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setCount(evt.currentTarget.value);
  };

  const handleInputBlur = (evt: React.FormEvent<HTMLInputElement>) => {
    const valueInput = Number(evt.currentTarget.value);
    if(valueInput < MIN_CAMERAS_IN_BASKET || isNaN(valueInput) || valueInput >= OVER_CAMERAS) {
      setCount(String(prevCount));
      setPrevCount(prevCount);
    } else {
      setCount(String(valueInput));
      setPrevCount(valueInput);
      if(currentCamera) {
        const index = sortedCamerasId.indexOf(currentCamera?.id);
        const filteredCameras = sortedCamerasId.filter((id) => id !== currentCamera.id);
        const newArrId = [];
        if(index !== -1) {
          while (newArrId.length < +count) {
            newArrId.push(currentCamera.id);
          }
        }
        const newArr = filteredCameras.concat(newArrId).sort((a, b) => a - b);
        dispatch(setCamerasBasket(newArr));
      }
    }
  };

  const handleClickDelete = (id: number) => {
    dispatch(setIsDeleteCamera(true));
    dispatch(setDeleteIdCamera(id));
    document.body.classList.add('scroll-lock');
  };

  if(!currentCamera) {
    return null;
  }

  return (currentCamera &&
    <li className="basket-item" data-testid="basket-item-camera">
      <div className="basket-item__img">
        <picture>
          <source
            type="image/webp"
            srcSet={`/${currentCamera.previewImgWebp}, ${currentCamera.previewImgWebp2x} 2x`}
          />
          <img
            src={`/${currentCamera.previewImg}`}
            srcSet={`/${currentCamera.previewImg2x} 2x`}
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
          <li className="basket-item__list-item">
            {currentCamera.type}
          </li>
          <li className="basket-item__list-item">
            {currentCamera.level}
          </li>
        </ul>
      </div>
      <p className="basket-item__price">
        <span className="visually-hidden">Цена:</span>{currentCamera.price} ₽
      </p>
      <div className="quantity">
        <button
          className="btn-icon btn-icon--prev"
          aria-label="уменьшить количество товара"
          onClick={() => handleCountDecrease(currentCamera.id)}
          disabled={countCameras === MIN_CAMERAS_IN_BASKET}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow"/>
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1"/>
        <input
          type="number"
          id="counter1"
          value={count}
          aria-label="количество товара"
          onBlur={handleInputBlur}
          onChange={handleInputChange}
        />
        <button
          className="btn-icon btn-icon--next"
          aria-label="увеличить количество товара"
          onClick={() => handleCountIncrease(currentCamera?.id)}
          disabled={countCameras >= MAX_CAMERAS_IN_BASKET}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow"/>
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price">
        <span className="visually-hidden">Общая цена:</span>{countCameras * currentCamera.price} ₽
      </div>
      <button
        className="cross-btn"
        type="button"
        aria-label="Удалить товар"
        onClick={() => handleClickDelete(currentCamera?.id)}
      >
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close"/>
        </svg>
      </button>
    </li>
  );
}
