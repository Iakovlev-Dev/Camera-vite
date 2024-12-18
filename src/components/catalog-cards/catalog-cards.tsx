import CatalogCard from '../catalog-card/catalog-card.tsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectCameras, selectCurrentPage} from '../../store/data-card-process/selectors.ts';
import {selectSortInner, selectSortOrder} from '../../store/sorting-filtered-process/selectors.ts';
import {sortingCameras} from '../../utils/utils.ts';
import {
  selectFilterCategory,
  selectFilterDown,
  selectFilterLevel,
  selectFilterType, selectFilterUp
} from '../../store/filters-process/selectors.ts';
import {TCameraCard} from '../../types/type-cards.ts';
import {setFilteredCameras} from '../../store/filters-process/filter-process.ts';
import {useEffect, useState} from 'react';


type TCatalogCard = {
  onClick: (id: number) => void;
}

export default function CatalogCards ({onClick}: TCatalogCard) {
  const dispatch = useAppDispatch();

  const handleClick = (id: number) => {
    onClick(id);
  };
  const cameras = useAppSelector(selectCameras);
  const currentSortInner = useAppSelector(selectSortInner);
  const currentSortOrder = useAppSelector(selectSortOrder);

  const currentFilterCategory = useAppSelector(selectFilterCategory);
  const currentFilterType = useAppSelector(selectFilterType);
  const currentFilterLevel = useAppSelector(selectFilterLevel);
  const currentFilterPriceDown = useAppSelector(selectFilterDown);
  const currentFilterPriceUp = useAppSelector(selectFilterUp);
  const currentPage = useAppSelector(selectCurrentPage);

  const sortedCameras = sortingCameras(currentSortInner, currentSortOrder, [...cameras]);

  const getFilteredCameras = (camera: TCameraCard) => {
    const matchesCategory = currentFilterCategory === '' ? true : currentFilterCategory.includes(camera.category);
    const matchesType = currentFilterType.length === 0 ? true : currentFilterType.includes(camera.type);
    const matchesLevel = currentFilterLevel.length === 0 ? true : currentFilterLevel.includes(camera.level);
    const matchesPriceDown = currentFilterPriceDown === '' ? true : camera.price >= Number(currentFilterPriceDown);
    const matchesPriceUp = currentFilterPriceUp === '' ? true : camera.price <= Number(currentFilterPriceUp);
    return matchesCategory && matchesType && matchesLevel && matchesPriceDown && matchesPriceUp;
  };

  const filteredCameras = sortedCameras?.filter((camera: TCameraCard) => getFilteredCameras(camera));

  useEffect(() => {
    dispatch(setFilteredCameras(filteredCameras || []));
  }, [dispatch, filteredCameras]);

  const [startSliceCameras, setStartSliceCameras] = useState(0);
  const [endSliceCameras, setEndSliceCameras] = useState(9);

  useEffect(() => {
    setStartSliceCameras((currentPage - 1) * 9);
    setEndSliceCameras((currentPage * 9));
  }, [currentPage]);


  if (!filteredCameras || !sortedCameras) {
    return null;
  }

  const slicedCameras = filteredCameras.slice(startSliceCameras, endSliceCameras);

  return (slicedCameras &&
    <div className="cards catalog__cards" data-testid="catalog-cards">
      {slicedCameras.map((camera: TCameraCard) => (
        <CatalogCard card={camera} key={camera.id} onClick={() => handleClick(camera.id)} />
      ))}
    </div>
  );
}
