import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {
  selectFilterCategory, selectFilterDown,
  selectFilteredCameras,
  selectFilterLevel,
  selectFilterType, selectFilterUp
} from '../../store/filters-process/selectors.ts';
import {COUNT_CAMERAS_ON_PAGE, MAX_COUNT_PAGE} from '../../const.ts';
import {useEffect, useState} from 'react';
import {setCurrentPageSlice} from '../../store/data-card-process/data-card-process.ts';
import {selectCurrentPage} from '../../store/data-card-process/selectors.ts';


export default function Pagination () {
  const dispatch = useAppDispatch();

  const currentFilterCategory = useAppSelector(selectFilterCategory);
  const currentFilterType = useAppSelector(selectFilterType);
  const currentFilterLevel = useAppSelector(selectFilterLevel);
  const currentFilterPriceDown = useAppSelector(selectFilterDown);
  const currentFilterPriceUp = useAppSelector(selectFilterUp);

  const filteredCameras = useAppSelector(selectFilteredCameras);
  const countPages = Math.floor((filteredCameras.length / COUNT_CAMERAS_ON_PAGE) + 1);
  const numberPages = Array.from({length: countPages}, (_, index) => index + 1);

  const currentPage = useAppSelector(selectCurrentPage);

  const [startSlice, setStartSlice] = useState(0);
  const [endSlice, setEndSlice] = useState(3);

  const slicedNumberPages = numberPages.slice(startSlice, endSlice);

  const handleClickNextButton = () => {
    dispatch(setCurrentPageSlice(endSlice + 1));
    setStartSlice(endSlice - 1);
    setEndSlice(endSlice + 2);
  };

  const handleClickPrevButton = () => {
    dispatch(setCurrentPageSlice(startSlice));
    setStartSlice(startSlice - 2);
    setEndSlice(endSlice - 2);
  };

  useEffect(() => {
    dispatch(setCurrentPageSlice(1));
    setStartSlice(0);
    setEndSlice(3);
  }, [dispatch, currentFilterCategory, currentFilterType, currentFilterLevel, currentFilterPriceDown, currentFilterPriceUp]);


  return (countPages <= 1 ? null :
    <div className="pagination" data-testid='pagination-test'>
      <ul className="pagination__list">
        {countPages <= MAX_COUNT_PAGE || startSlice < 2 ? '' :
          <li className="pagination__item">
            <a
              className="pagination__link pagination__link--text"
              onClick={handleClickPrevButton}
            >
            Назад
            </a>
          </li>}
        {slicedNumberPages.map((page) => (
          <li className="pagination__item" key={page}>
            <a
              className={`pagination__link ${currentPage === page ? 'pagination__link--active' : ''}`}
              onClick={() => dispatch(setCurrentPageSlice(page))}
            >
              {page}
            </a>
          </li>
        ))}
        {countPages <= MAX_COUNT_PAGE || numberPages.length <= endSlice ? '' :
          <li className="pagination__item">
            <a
              className="pagination__link pagination__link--text"
              onClick={handleClickNextButton}
            >
            Далее
            </a>
          </li>}
      </ul>
    </div>

  );
}
