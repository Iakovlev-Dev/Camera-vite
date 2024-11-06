import CatalogCard from '../catalog-card/catalog-card.tsx';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {selectSortInner, selectSortOrder} from '../../store/sorting-filtered-process/selectors.ts';
import {sortingCameras} from '../../utils/utils.ts';
import {selectFilterCategory, selectFilterLevel, selectFilterType} from '../../store/filters-process/selectors.ts';
import {TCameraCard} from '../../types/type-cards.ts';
import {useEffect} from 'react';
import {setFilterPriceDown, setFilterPriceUp} from '../../store/filters-process/filter-process.ts';

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

  const sortedCameras = sortingCameras(currentSortInner, currentSortOrder, [...cameras]);


  const getFilteredCameras = (camera: TCameraCard) => {
    const matchesCategory = currentFilterCategory === '' ? true : currentFilterCategory.includes(camera.category);
    const matchesType = currentFilterType.length === 0 ? true : currentFilterType.includes(camera.type);
    const matchesLevel = currentFilterLevel.length === 0 ? true : currentFilterLevel.includes(camera.level);
    return matchesCategory && matchesType && matchesLevel;
  };

  const filteredCameras = sortedCameras?.filter((camera: TCameraCard) => getFilteredCameras(camera));

  useEffect(() => {
    if(filteredCameras) {
      const priceDown = filteredCameras[0]?.price.toString();
      const priceUp = filteredCameras[filteredCameras.length - 1]?.price.toString();
      dispatch(setFilterPriceDown(priceDown));
      dispatch(setFilterPriceUp(priceUp));
    }
  }, [filteredCameras, currentFilterType, currentFilterLevel, currentFilterCategory, dispatch]);

  if (!filteredCameras) {
    return null;
  }

  if(!sortedCameras) {
    return null;
  }
  return (filteredCameras &&
    <div className="cards catalog__cards" data-testid="catalog-cards">
      {filteredCameras.map((camera: TCameraCard) => (
        <CatalogCard card={camera} key={camera.id} onClick={() => handleClick(camera.id)} />
      ))}
    </div>
  );
}
