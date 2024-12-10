import Header from '../../components/header/header.tsx';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.tsx';
import Footer from '../../components/footer/footer.tsx';
import Basket from '../../components/basket/basket.tsx';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../store/hooks.ts';
import {selectCamerasIdBasket} from '../../store/basket-process/selectors.ts';
import {redirectToRote} from '../../store/action.ts';
import {AppRoute} from '../../const.ts';

export default function PageBasket () {
  const dispatch = useAppDispatch();
  const camerasIdBasket = useAppSelector(selectCamerasIdBasket);

  if(camerasIdBasket.length === 0) {
    dispatch(redirectToRote(AppRoute.Main));
  }

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
