import {FilterLevel} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {setFilterLevel} from '../../store/filters-process/filter-process.ts';
import {selectFilterLevel} from '../../store/filters-process/selectors.ts';

export default function CatalogFilterLevel() {
  const dispatch = useAppDispatch();
  const currentFiltersLevel = useAppSelector(selectFilterLevel);

  const handlerChangeLevel = (level: string) => {
    const checkedType = [...currentFiltersLevel];
    const indexType = checkedType.indexOf(level);
    if(indexType === -1) {
      checkedType.push(level);
    } else {
      checkedType.splice(indexType, 1);
    }
    dispatch(setFilterLevel(checkedType));
  };

  return (
    <fieldset className="catalog-filter__block" data-testid="catalogFilterLevel">
      <legend className="title title--h5">Уровень</legend>
      {Object.keys(FilterLevel).map((level) => (
        <div className="custom-checkbox catalog-filter__item" key={level}>
          <label>
            <input
              type="checkbox"
              name={level}
              onClick={() => handlerChangeLevel(FilterLevel[level])}
            />
            <span className="custom-checkbox__icon"/>
            <span className="custom-checkbox__label">{FilterLevel[level]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
