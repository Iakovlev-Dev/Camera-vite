import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';
import {Route, Routes} from 'react-router-dom';
import PageMain from '../../pages/page-main/page-main.tsx';
import {AppRoute} from '../../const.ts';
import PageCard from '../../pages/page-card/page-card.tsx';
import PageNotFound from '../../pages/page-not-found/page-not-found.tsx';
import PageBasket from '../../pages/page-basket/page-basket.tsx';
import {useAppDispatch} from '../../store/hooks.ts';
import {setCamerasBasket} from '../../store/basket-process/basket-process.ts';

export default function App () {
  const dispatch = useAppDispatch();

  const localStorageData = localStorage.getItem('camerasId');

  if (localStorageData !== null) {
    const camerasIdBasketGet = JSON.parse(localStorageData) as number [];
    dispatch(setCamerasBasket(camerasIdBasketGet));
  }

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain />}
          />
          <Route
            path={AppRoute.Cameras}
            element={<PageCard />}
          />
          <Route
            path={AppRoute.Card}
            element={<PageBasket />}
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
