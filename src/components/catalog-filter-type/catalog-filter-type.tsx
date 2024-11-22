import {FilterType} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {setFilterType} from '../../store/filters-process/filter-process.ts';
import {selectFilterCategory, selectFilterType} from '../../store/filters-process/selectors.ts';

export default function CatalogFilterType() {
  const dispatch = useAppDispatch();
  const currentFiltersType = useAppSelector(selectFilterType);
  const currentFilterCategory = useAppSelector(selectFilterCategory);

  const disabledItem = (active: string, current: string) => {
    if(active === 'Фотоаппарат' || !active) {
      return false;
    } else {
      return current === FilterType.snapshot || current === FilterType.film;
    }
  };

  const handleChangeType = (type: string) => {
    const checkedType =
    currentFiltersType.includes(type)
      ? currentFiltersType.filter((item) => item !== type)
      : [...currentFiltersType, type];
    dispatch(setFilterType(checkedType));
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
              onClick={() => handleChangeType(FilterType[type])}
              checked={currentFiltersType.includes(FilterType[type])}
              disabled={disabledItem(currentFilterCategory, FilterType[type])}
              readOnly
            />
            <span className="custom-checkbox__icon"/>
            <span className="custom-checkbox__label">{FilterType[type]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
