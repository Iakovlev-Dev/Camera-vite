import {FilterCategory} from '../../const.ts';
import {useAppDispatch} from '../../store/hooks.ts';
import {setFilterCategory} from '../../store/filters-process/filter-process.ts';

export default function CatalogFilterCategories() {
  const dispatch = useAppDispatch();

  const handleChangeCategory = (category: string) => {
    dispatch(setFilterCategory(category));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Категория</legend>
      {Object.keys(FilterCategory).map((category) => (
        <div className="custom-radio catalog-filter__item" key={category}>
          <label>
            <input
              type="radio"
              name="category"
              defaultValue={category}
              onChange={() => handleChangeCategory(FilterCategory[category])}
            />
            <span className="custom-radio__icon"/>
            <span className="custom-radio__label">{FilterCategory[category]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
