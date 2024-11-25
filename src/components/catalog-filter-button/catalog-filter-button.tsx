import {useAppDispatch} from '../../store/hooks.ts';
import {
  setFilterCategory,
  setFilterLevel,
  setFilterPriceDown, setFilterPriceUp,
  setFilterType
} from '../../store/filters-process/filter-process.ts';
import {useSearchParams} from 'react-router-dom';

export default function CatalogFilterButton () {
  const dispatch = useAppDispatch();

  const [, setSearchParams] = useSearchParams();

  const handleClickButton = () => {
    dispatch(setFilterLevel([]));
    dispatch(setFilterType([]));
    dispatch(setFilterCategory(''));
    dispatch(setFilterPriceDown(''));
    dispatch(setFilterPriceUp(''));

    setSearchParams((prev) => {
      prev.delete('priceMin');
      prev.delete('priceMax');
      prev.delete('level');
      prev.delete('type');
      prev.delete('category');
      prev.delete('types');

      return prev;
    });
  };
  return (
    <button
      className="btn catalog-filter__reset-btn"
      type="reset"
      onClick={handleClickButton}
    >
      Сбросить фильтры
    </button>
  );
}
