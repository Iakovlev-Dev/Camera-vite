import {useDispatch} from 'react-redux';
import {setFilterPriceDown, setFilterPriceUp} from '../../store/filters-process/filter-process.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {selectFilterDown, selectFilteredCameras, selectFilterUp} from '../../store/filters-process/selectors.ts';
import React, {useEffect, useRef} from 'react';

export default function CatalogFilterPrice() {
  const dispatch = useDispatch();
  const filteredCameras = useAppSelector(selectFilteredCameras);
  const filteredCamerasByPrice = [...filteredCameras].sort((a, b) => a.price - b.price);

  const priceMinFiltered = filteredCamerasByPrice[0]?.price;
  const priceMaxFiltered = filteredCamerasByPrice[filteredCamerasByPrice.length - 1]?.price;

  const inputMinRef = useRef<HTMLInputElement | null>(null);
  const inputMaxRef = useRef<HTMLInputElement | null>(null);

  const priceDownSelect = useAppSelector(selectFilterDown);
  const priceUpSelect = useAppSelector(selectFilterUp);

  useEffect(() => {
    if(inputMinRef.current && priceMinFiltered && priceMaxFiltered && inputMaxRef.current) {
      dispatch(setFilterPriceDown(priceMinFiltered?.toString()));
      dispatch(setFilterPriceUp(priceMaxFiltered?.toString()));
      inputMinRef.current.value = priceMinFiltered.toString();
      inputMaxRef.current.value = priceMaxFiltered.toString();
    }
  }, [priceMinFiltered, priceMaxFiltered, dispatch]);

  useEffect(() => {
    if(filteredCameras.length === 0 && filteredCameras) {
      dispatch(setFilterPriceDown(''));
    }
  }, [dispatch, filteredCameras]);

  const handleChangePriceDown = (evt: React.FocusEvent<HTMLInputElement>) => {
    const minValue = Number(evt.target.value);
    if(minValue < priceMinFiltered && inputMinRef.current || minValue < Number(priceDownSelect) && inputMinRef.current) {
      inputMinRef.current.value = priceMinFiltered.toString();
    } else if (minValue > Number(priceUpSelect) && inputMinRef.current) {
      inputMinRef.current.value = priceUpSelect;
      dispatch(setFilterPriceDown(priceUpSelect));
    } else if (minValue > priceMaxFiltered && inputMinRef.current) {
      inputMinRef.current.value = priceMaxFiltered?.toString();
      dispatch(setFilterPriceDown(priceMinFiltered?.toString()));
      dispatch(setFilterPriceUp(priceMaxFiltered?.toString()));
    } else {
      dispatch(setFilterPriceDown(minValue.toString()));
    }
  };

  const handleChangePriceUp = (evt: React.FocusEvent<HTMLInputElement>) => {
    const maxValue = Number(evt.target.value);
    if(inputMinRef.current && inputMaxRef.current) {
      const inputMinRefValue = Number(inputMinRef.current.value);
      if(maxValue > Number(priceUpSelect)) {
        inputMaxRef.current.value = priceMaxFiltered?.toString();
      } else if (maxValue < inputMinRefValue) {
        inputMaxRef.current.value = priceUpSelect;
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
              placeholder={`от ${priceMinFiltered || ''}`}
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
              placeholder={`до ${priceMaxFiltered || ''}`}
              ref={inputMaxRef}
              onBlur={(evt) => handleChangePriceUp(evt)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}
