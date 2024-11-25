import {FilterLevel} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {setFilterLevel} from '../../store/filters-process/filter-process.ts';
import {selectFilterLevel} from '../../store/filters-process/selectors.ts';
import {useSearchParams} from 'react-router-dom';

export default function CatalogFilterLevel() {
  const dispatch = useAppDispatch();
  const currentFiltersLevel = useAppSelector(selectFilterLevel);

  const [, setSearchParams] = useSearchParams();

  const handlerChangeLevel = (level: string) => {
    const checkedLevel = [...currentFiltersLevel];
    const indexType = checkedLevel.indexOf(level);
    if(indexType === -1) {
      checkedLevel.push(level);
    } else {
      checkedLevel.splice(indexType, 1);
    }
    dispatch(setFilterLevel(checkedLevel));

    setSearchParams((prev) => {
      if(checkedLevel.length === 0) {
        prev.delete('level');
        return prev;
      }
      prev.set('level', checkedLevel.join(' '));
      return prev;
    });
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
              checked={currentFiltersLevel.includes(FilterLevel[level])}
              onChange={() => handlerChangeLevel(FilterLevel[level])}
            />
            <span className="custom-checkbox__icon"/>
            <span className="custom-checkbox__label">{FilterLevel[level]}</span>
          </label>
        </div>
      ))}
    </fieldset>
  );
}
