import CatalogCard from '../catalog-card/catalog-card.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';

type TCatalogCard = {
  onClick: () => void;
}

export default function CatalogCards ({onClick}: TCatalogCard) {
  const cameras = useAppSelector(selectCameras);
  return (
    <div className="cards catalog__cards">
      {cameras.map((camera) => (
        <CatalogCard card={camera} key={camera.id} onClick={onClick} />
      ))}
    </div>
  );
}
