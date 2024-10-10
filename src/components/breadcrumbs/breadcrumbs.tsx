import {Link, useParams} from 'react-router-dom';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {TCameraCard} from '../../types/type-cards.ts';
import {AppRoute} from '../../const.ts';

export default function Breadcrumbs () {
  const {id} = useParams();
  const cameras = useAppSelector(selectCameras);

  const currentCamera = cameras.find((camera) => camera.id.toString() === id);

  const renderBreadcrumbs = (idParams: string | undefined, camera: TCameraCard | undefined) => {
    if(typeof idParams === 'string') {
      return (camera &&
        <>
          <li className="breadcrumbs__item">
            <Link className="breadcrumbs__link" to={AppRoute.Main}>
              Каталог
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini" />
              </svg>
            </Link>
          </li>
          <li className="breadcrumbs__item">
            <span className="breadcrumbs__link breadcrumbs__link--active">
              {camera.name}
            </span>
          </li>
        </>
      );

    } else if(typeof idParams === undefined) {
      return (
        <li className="breadcrumbs__item">
          <span className="breadcrumbs__link breadcrumbs__link--active">
                Каталог
          </span>
        </li>
      );
    }
  };
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <li className="breadcrumbs__item">
            <a className="breadcrumbs__link" href="index.html">
              Главная
              <svg width={5} height={8} aria-hidden="true">
                <use xlinkHref="#icon-arrow-mini"/>
              </svg>
            </a>
          </li>
          {renderBreadcrumbs(id, currentCamera)}
        </ul>
      </div>
    </div>
  );
}
