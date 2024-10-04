import CatalogCard from '../catalog-card/catalog-card.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';

export default function CatalogCards () {
  const cameras = useAppSelector(selectCameras);
  return (
    <div className="cards catalog__cards">
      {cameras.map((camera) => (
        <CatalogCard card={camera} key={camera.id}/>
      ))}
    </div>
  );
}
