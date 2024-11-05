import {useDispatch} from 'react-redux';
import {setFilterPriceDown, setFilterPriceUp} from '../../store/filters-process/filter-process.ts';
import {useAppSelector} from '../../store/hooks.ts';
import {selectFilterDown, selectFilterUp} from '../../store/filters-process/selectors.ts';
import {useRef} from 'react';

export default function CatalogFilterPrice() {
  const dispatch = useDispatch();
  const priceDown = useAppSelector(selectFilterDown);
  const priceUp = useAppSelector(selectFilterUp);

  const inputMinRef = useRef<HTMLInputElement | null>(null);

  const handleChangePriceUp = (price: string) => {
    dispatch(setFilterPriceUp(price));
  };

  const handleChangePriceDown = (price: string) => {
    dispatch(setFilterPriceDown(price));
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
              ref={inputMinRef}
              onBlur={(evt) => handleChangePriceDown(evt.target.value)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              placeholder={`до ${priceUp}`}
              onBlur={(evt) => handleChangePriceUp(evt.target.value)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}
