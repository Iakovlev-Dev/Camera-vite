import {useDispatch} from 'react-redux';
import {setFilterPriceDown, setFilterPriceUp} from '../../store/filters-process/filter-process.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {selectFilteredCameras} from '../../store/filters-process/selectors.ts';
import React, {useEffect, useState} from 'react';
import {useDebounce} from 'use-debounce';
import {useSearchParams} from 'react-router-dom';

export default function CatalogFilterPrice() {
  const dispatch = useDispatch();
  const filteredCameras = useAppSelector(selectFilteredCameras);
  const filteredCamerasByPrice = [...filteredCameras].sort((a, b) => a.price - b.price);

  const [, setSearchParams] = useSearchParams();

  const priceMinFiltered = filteredCamerasByPrice[0]?.price;
  const priceMaxFiltered = filteredCamerasByPrice[filteredCamerasByPrice.length - 1]?.price;

  const [inputMin, setInputMin] = useState(priceMinFiltered);
  const [inputMax, setInputMax] = useState(priceMaxFiltered);

  useEffect(() => {
    setInputMin(priceMinFiltered);
    setInputMax(priceMaxFiltered);
  }, [priceMaxFiltered, priceMinFiltered]);

  const [debounceMin] = useDebounce(inputMin, 2000);
  const [debounceMax] = useDebounce(inputMax, 2000);

  useEffect(() => {
    if (debounceMin <= debounceMax) {
      if (debounceMin < priceMinFiltered) {
        setInputMin(priceMinFiltered);
      }
      if (debounceMin > priceMinFiltered) {
        dispatch(setFilterPriceDown(debounceMin.toString()));
      }
    } else {
      setInputMin(priceMinFiltered);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceMax, debounceMin, dispatch]);

  useEffect(() => {
    if (debounceMax >= debounceMin) {
      if (debounceMax > priceMaxFiltered) {
        setInputMax(priceMaxFiltered);
      } else {
        dispatch(setFilterPriceUp(debounceMax.toString()));
      }
    } else {
      setInputMax(priceMaxFiltered);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceMax, debounceMin, dispatch]);


  const handleChangePrice = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {value, name} = evt.currentTarget;
    if (name === 'price') {
      setInputMin(Number(value));

      setSearchParams((prev) => {
        prev.set('priceMin', value);
        return prev;
      });
    }
    if (name === 'priceUp') {
      setInputMax(Number(value));

      setSearchParams((prev) => {
        prev.set('priceMax', value);
        return prev;
      });
    }
  };

  return (
    <fieldset className="catalog-filter__block" data-testid="filterPrice">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="price"
              placeholder={`от ${priceMinFiltered || ''}`}
              value={inputMin || ''}
              onChange={(evt) => handleChangePrice(evt)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              placeholder={`до ${priceMaxFiltered || ''}`}
              value={inputMax || ''}
              onChange={(evt) => handleChangePrice(evt)}

            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}
