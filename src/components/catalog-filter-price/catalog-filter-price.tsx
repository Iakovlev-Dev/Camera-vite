import {useDispatch} from 'react-redux';
import {setFilterPriceDown, setFilterPriceUp} from '../../store/filters-process/filter-process.ts';

export default function CatalogFilterPrice() {
  const dispatch = useDispatch();

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
              placeholder="от"
              onBlur={(evt) => handleChangePriceDown(evt.target.value)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input
              type="number"
              name="priceUp"
              placeholder="до"
              onBlur={(evt) => handleChangePriceUp(evt.target.value)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}
