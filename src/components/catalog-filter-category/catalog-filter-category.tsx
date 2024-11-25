import {FilterCategory, FilterType} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {setFilterCategory, setFilterType} from '../../store/filters-process/filter-process.ts';
import {selectFilterCategory, selectFilterType} from '../../store/filters-process/selectors.ts';
import {useSearchParams} from 'react-router-dom';

export default function CatalogFilterCategories() {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const filteredType = useAppSelector(selectFilterType);
  const currentFilterCategory = useAppSelector(selectFilterCategory);


  const [, setSearchParams] = useSearchParams();

  const handleChangeCategory = (category: string) => {
    if(category === 'Фотокамера') {
      dispatch(setFilterCategory('Фотоаппарат'));
    } else {
      dispatch(setFilterCategory(category));
      const updateCategory = filteredType?.filter((type) => type !== FilterType.film && type !== FilterType.snapshot);
      dispatch(setFilterType(updateCategory || []));
    }
    setSearchParams((prev) => {
      prev.set('category', category);
      return prev;
    });
  };

  return (
    <fieldset className="catalog-filter__block" data-testid='catalogFilterCategory'>
      <legend className="title title--h5">Категория</legend>
      {Object.keys(FilterCategory).map((category) => (
        <div className="custom-radio catalog-filter__item" key={category}>
          <label>
            <input
              type="radio"
              name="category"
              checked={currentFilterCategory.includes(FilterCategory[category])}
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
