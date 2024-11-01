import CatalogCard from '../catalog-card/catalog-card.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {selectSortInner, selectSortOrder} from '../../store/sorting-filtered-process/selectors.ts';
import {sortingCameras} from '../../utils/utils.ts';

type TCatalogCard = {
  onClick: (id: number) => void;
}

export default function CatalogCards ({onClick}: TCatalogCard) {
  const handleClick = (id: number) => {
    onClick(id);
  };
  const cameras = useAppSelector(selectCameras);
  const currentSortInner = useAppSelector(selectSortInner);
  const currentSortOrder = useAppSelector(selectSortOrder);

  const sortedCameras = sortingCameras(currentSortInner, currentSortOrder, [...cameras]);

  if(!sortedCameras) {
    return null;
  }

  return (sortedCameras &&
    <div className="cards catalog__cards" data-testid="catalog-cards">
      {sortedCameras.map((camera) => (
        <CatalogCard card={camera} key={camera.id} onClick={() => handleClick(camera.id)} />
      ))}
    </div>
  );
}
