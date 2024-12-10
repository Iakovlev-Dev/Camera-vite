import Header from '../../components/header/header.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import Footer from '../../components/footer/footer.tsx';
import Basket from '../../components/basket/basket.tsx';
import {useEffect} from 'react';
import BasketModalDelete from '../../components/basket-modal-delete/basket-modal-delete.tsx';
import {useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket, selectIsDeletingCamera} from '../../store/basket-process/selectors.ts';

export default function PageBasket () {
  const isDeletingCamera = useAppSelector(selectIsDeletingCamera);
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  useEffect(() => {
    window.scrollTo({
      top:0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('camerasId', JSON.stringify(camerasIdBasket));
  }, [camerasIdBasket]);

  return (
    <div className="wrapper">
      <Header />
      <main>
        <div className="page-content">
          <Breadcrumbs />
          <Basket />
        </div>
        {isDeletingCamera && <BasketModalDelete />}
      </main>
      <Footer />
    </div>
  );
}
