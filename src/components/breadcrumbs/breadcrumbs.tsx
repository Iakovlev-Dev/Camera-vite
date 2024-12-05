import {Link, Location, useLocation, useParams} from 'react-router-dom';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCameras} from '../../store/data-card-process/selectors.ts';
import {TCameraCard} from '../../types/type-cards.ts';
import {AppRoute} from '../../const.ts';

export default function Breadcrumbs () {
  const {id} = useParams();
  const cameras = useAppSelector(selectCameras);
  const currentCamera = cameras.find((camera) => camera.id.toString() === id);

  const location = useLocation();

  const renderBreadcrumbs = (idParams: string | undefined, camera: TCameraCard | undefined, loc: Location) => {
    const renderLink = (to: string, label: string) => (
      <li className="breadcrumbs__item">
        <Link className="breadcrumbs__link" to={to}>
          {label}
          <svg width={5} height={8} aria-hidden="true">
            <use xlinkHref="#icon-arrow-mini" />
          </svg>
        </Link>
      </li>
    );

    const renderActiveItem = (label: string) => (
      <li className="breadcrumbs__item">
        <span className="breadcrumbs__link breadcrumbs__link--active">{label}</span>
      </li>
    );

    if (idParams && camera) {
      return (
        <>
          {renderLink(AppRoute.Main, 'Каталог')}
          {renderActiveItem(camera.name)}
        </>
      );
    }

    if (loc.pathname === '/card') {
      return (
        <>
          {renderLink(AppRoute.Main, 'Каталог')}
          {renderActiveItem('Корзина')}
        </>
      );
    }

    return renderActiveItem('Каталог');
  };

  return (
    <div className="breadcrumbs" data-testid="breadcrumbs">
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
          {renderBreadcrumbs(id, currentCamera, location)}
        </ul>
      </div>
    </div>
  );
}
