import {useAppDispatch} from '../../store/hooks.ts';
import {
  setFilterCategory,
  setFilterLevel,
  setFilterPriceDown, setFilterPriceUp,
  setFilterType
} from '../../store/filters-process/filter-process.ts';

export default function CatalogFilterButton () {
  const dispatch = useAppDispatch();

  const handleClickButton = () => {
    dispatch(setFilterLevel([]));
    dispatch(setFilterType([]));
    dispatch(setFilterCategory(''));
    dispatch(setFilterPriceDown(''));
    dispatch(setFilterPriceUp(''));
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
