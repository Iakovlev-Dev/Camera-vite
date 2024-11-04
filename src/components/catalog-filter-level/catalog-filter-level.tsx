import {FilterLevel} from '../../const.ts';

export default function CatalogFilterLevel() {
  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {Object.keys(FilterLevel).map((level) => (
        <div className="custom-checkbox catalog-filter__item" key={level}>
          <label>
            <input
              type="checkbox"
              name={level}
            />
            <span className="custom-checkbox__icon"/>
            <span className="custom-checkbox__label">{FilterLevel[level]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
