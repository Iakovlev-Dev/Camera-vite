import NavMenu from '../nav-menu/nav-menu.tsx';
import Logo from '../logo/logo.tsx';


export default function Header () {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo />
        <NavMenu />
        {/*<FormSearch />*/}
      </div>
    </header>
  );
}
