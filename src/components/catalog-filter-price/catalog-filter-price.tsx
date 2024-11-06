import {useDispatch} from 'react-redux';
import {setFilterPriceDown, setFilterPriceUp} from '../../store/filters-process/filter-process.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {selectFilterDown, selectFilterUp} from '../../store/filters-process/selectors.ts';
import React from 'react';

export default function CatalogFilterPrice() {
  const dispatch = useDispatch();
  const priceDown = useAppSelector(selectFilterDown);
  const priceUp = useAppSelector(selectFilterUp);

  const handleChangePriceUp = (evt: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setFilterPriceUp(evt.target.value));
  };

  const handleChangePriceDown = (evt: React.FocusEvent<HTMLInputElement>) => {
    dispatch(setFilterPriceDown(evt.target.value));
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
              placeholder={`от ${priceDown}`}
              onBlur={(evt) => handleChangePriceDown(evt)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              placeholder={`до ${priceUp}`}
              onBlur={(evt) => handleChangePriceUp(evt)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}
