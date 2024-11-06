import { FilterType} from '../../const.ts';
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
    const checkedType = [...currentFiltersType];
    const indexType = checkedType.indexOf(type);
    if(indexType === -1) {
      checkedType.push(type);
    } else {
      checkedType.splice(indexType, 1);
    }
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
              onChange={() => handleChangeType(FilterType[type])}
              disabled={disabledItem(currentFilterCategory, FilterType[type])}
            />
            <span className="custom-checkbox__icon"/>
            <span className="custom-checkbox__label">{FilterType[type]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
