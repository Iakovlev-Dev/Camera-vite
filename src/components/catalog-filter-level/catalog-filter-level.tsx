import {FilterLevel} from '../../const.ts';
import {useAppDispatch} from '../../store/hooks.ts';
import {setFilterLevel} from '../../store/filters-process/filter-process.ts';

export default function CatalogFilterLevel() {
  const dispatch = useAppDispatch();

  const handlerChangeLevel = (level: string) => {
    dispatch(setFilterLevel(level));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Уровень</legend>
      {Object.keys(FilterLevel).map((level) => (
        <div className="custom-checkbox catalog-filter__item" key={level}>
          <label>
            <input
              type="checkbox"
              name={level}
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
