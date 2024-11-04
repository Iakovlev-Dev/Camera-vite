import {FilterCategory} from '../../const.ts';

export default function CatalogFilterCategories() {
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
            />
            <span className="custom-radio__icon"/>
            <span className="custom-radio__label">{FilterCategory[category]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
