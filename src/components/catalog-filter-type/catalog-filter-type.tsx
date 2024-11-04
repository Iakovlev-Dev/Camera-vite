import {FilterType} from '../../const.ts';

export default function CatalogFilterType() {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {Object.keys(FilterType).map((type) => (
        <div className="custom-checkbox catalog-filter__item" key={type}>
          <label>
            <input
              type="checkbox"
              name={type}
            />
            <span className="custom-checkbox__icon"/>
            <span className="custom-checkbox__label">{FilterType[type]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
