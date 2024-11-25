import {SortingInner, SortingOrder} from '../../const.ts';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {setSortInner, setSortOrder} from '../../store/sorting-filtered-process/sorting-process.ts';
import {selectSortInner, selectSortOrder} from '../../store/sorting-filtered-process/selectors.ts';
import {useSearchParams} from 'react-router-dom';

export default function CatalogSort() {
  const dispatch = useAppDispatch();
  const currentSortInner = useAppSelector(selectSortInner);
  const currentSortOrder = useAppSelector(selectSortOrder);

  const [, setSearchParams] = useSearchParams();

  const handleChangeSortInner = (sortInner: string) => {
    dispatch(setSortInner(SortingInner[sortInner]));

    setSearchParams((prev) => {
      prev.set('sort_inner', SortingInner[sortInner]);
      return prev;
    });
  };

  const handleChangeSortOrder = (sortOrder: string) => {
    dispatch(setSortOrder(SortingOrder[sortOrder]));

    setSearchParams((prev) => {
      prev.set('sort_order', SortingInner[sortOrder]);
      return prev;
    });
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            {Object.keys(SortingInner).map((type) => (
              <div className="catalog-sort__btn-text" key={type}>
                <input
                  type="radio"
                  id={type}
                  name="sort"
                  onChange={() => handleChangeSortInner(type)}
                  checked={currentSortInner === SortingInner[type]}
                />
                <label htmlFor={type}>{SortingInner[type]}</label>
              </div>
            )
            )}
          </div>
          <div className="catalog-sort__order">
            {Object.keys(SortingOrder).map((order) => (
              <div className={`catalog-sort__btn catalog-sort__btn--${order}`} key={order}>
                <input
                  type="radio"
                  id={order}
                  name="sort-icon"
                  aria-label={SortingOrder[order]}
                  onChange={() => handleChangeSortOrder(order)}
                  checked={currentSortOrder === SortingOrder[order]}
                />
                <label htmlFor={order}>
                  <svg width={16} height={14} aria-hidden="true">
                    <use xlinkHref="#icon-sort"/>
                  </svg>
                </label>
              </div>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
}
