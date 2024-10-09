import {AppRoute, NavLinkMenu} from '../../const.ts';
import {Link} from 'react-router-dom';

export default function NavMenu () {

  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link
            className="main-nav__link"
            to={AppRoute.Main}
          >
            {NavLinkMenu.Catalog}
          </Link>
        </li>
        <li className="main-nav__item">
          <a
            className="main-nav__link"
          >
            {NavLinkMenu.Guarantee}
          </a>
        </li>
        <li className="main-nav__item">
          <a
            className="main-nav__link"
          >
            {NavLinkMenu.Delivery}
          </a>
        </li>
        <li className="main-nav__item">
          <a
            className="main-nav__link"
          >
            {NavLinkMenu.About}
          </a>
        </li>
      </ul>
    </nav>
  );
}
