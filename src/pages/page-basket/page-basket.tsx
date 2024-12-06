import Header from '../../components/header/header.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import Footer from '../../components/footer/footer.tsx';
import Basket from '../../components/basket/basket.tsx';
import {useEffect} from 'react';

export default function PageBasket () {
  useEffect(() => {
    window.scrollTo({
      top:0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs />
          <Basket />
        </div>
      </main>
      <Footer />
    </div>
  );
}
