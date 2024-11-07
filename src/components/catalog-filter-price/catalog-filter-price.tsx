import {useDispatch} from 'react-redux';
import {setFilterPriceDown, setFilterPriceUp} from '../../store/filters-process/filter-process.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {selectFilterDown, selectFilteredCameras, selectFilterUp} from '../../store/filters-process/selectors.ts';
import React, {useEffect, useRef} from 'react';

export default function CatalogFilterPrice() {
  const dispatch = useDispatch();
  const filteredCameras = useAppSelector(selectFilteredCameras);
  const filteredCamerasByPrice = [...filteredCameras].sort((a, b) => a.price - b.price);

  const priceMin = filteredCamerasByPrice[0]?.price;
  const priceMax = filteredCamerasByPrice[filteredCamerasByPrice.length - 1]?.price;

  const inputMinRef = useRef<HTMLInputElement | null>(null);
  const inputMaxRef = useRef<HTMLInputElement | null>(null);

  const priceDown = useAppSelector(selectFilterDown);
  const priceUp = useAppSelector(selectFilterUp);

  useEffect(() => {
    if(inputMinRef.current && priceMin && priceMax && inputMaxRef.current) {
      dispatch(setFilterPriceDown(priceMin?.toString()));
      dispatch(setFilterPriceUp(priceMax?.toString()));
      inputMinRef.current.value = priceMin.toString();
      inputMaxRef.current.value = priceMax.toString();
    }
  }, [priceMin, priceMax, dispatch]);

  const handleChangePriceDown = (evt: React.FocusEvent<HTMLInputElement>) => {
    const minValue = Number(evt.target.value);
    if(minValue < priceMin && inputMinRef.current || minValue < Number(priceDown) && inputMinRef.current) {
      inputMinRef.current.value = priceMin.toString();
    } else if (minValue > Number(priceUp) && inputMinRef.current) {
      inputMinRef.current.value = priceUp;
      dispatch(setFilterPriceDown(priceUp));
    } else if (minValue > priceMax && inputMinRef.current) {
      inputMinRef.current.value = priceMax?.toString();
      dispatch(setFilterPriceDown(priceMin?.toString()));
      dispatch(setFilterPriceUp(priceMax?.toString()));
    } else {
      dispatch(setFilterPriceDown(minValue.toString()));
    }
  };

  const handleChangePriceUp = (evt: React.FocusEvent<HTMLInputElement>) => {
    const maxValue = Number(evt.target.value);
    if(inputMinRef.current && inputMaxRef.current) {
      const inputMinRefValue = Number(inputMinRef.current.value);
      if(maxValue > Number(priceUp)) {
        inputMaxRef.current.value = priceMax?.toString();
      } else if (maxValue < inputMinRefValue) {
        inputMaxRef.current.value = priceUp;
      }
    }
    dispatch(setFilterPriceUp(evt.target.value));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price"
              placeholder={`от ${priceMin}`}
              ref={inputMinRef}
              onBlur={(evt) => handleChangePriceDown(evt)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              placeholder={`до ${priceMax}`}
              ref={inputMaxRef}
              onBlur={(evt) => handleChangePriceUp(evt)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}
