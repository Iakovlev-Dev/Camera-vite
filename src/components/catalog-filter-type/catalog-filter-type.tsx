import {FilterType} from '../../const.ts';
import {useAppDispatch} from '../../store/hooks.ts';
import {setFilterType} from '../../store/filters-process/filter-process.ts';

export default function CatalogFilterType() {
  const dispatch = useAppDispatch();

  const handleChangeType = (type: string) => {
    dispatch(setFilterType(type));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Тип камеры</legend>
      {Object.keys(FilterType).map((type) => (
        <div className="custom-checkbox catalog-filter__item" key={type}>
          <label>
            <input
              type="checkbox"
              name={type}
              onChange={() => handleChangeType(FilterType[type])}
            />
            <span className="custom-checkbox__icon"/>
            <span className="custom-checkbox__label">{FilterType[type]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
