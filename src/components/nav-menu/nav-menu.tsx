import {NavLinkMenu} from '../../const.ts';

export default function NavMenu () {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        {Object.entries(NavLinkMenu).map(([item1,item2]) => (
          <li className="main-nav__item" key={item1}>
            <a className="main-nav__link" href="#">
              {item2}
            </a>
          </li>
        ))}

      </ul>
    </nav>
  );
}
