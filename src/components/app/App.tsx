import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';
import {Route, Routes} from 'react-router-dom';

import PageMain from '../../pages/page-main/page-main.tsx';
import {AppRoute} from '../../const.ts';
import PageCard from '../../pages/page-card/page-card.tsx';
import PageNotFound from '../../pages/page-not-found/page-not-found.tsx';

export default function App () {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain />}
          />
          <Route
            path={AppRoute.Camera}
            element={<PageCard />}
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
