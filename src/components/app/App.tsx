import {HelmetProvider} from 'react-helmet-async';
import HistoryRouter from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';
import {Route, Routes} from 'react-router-dom';

import PageMain from '../../pages/page-main/page-main.tsx';
import {AppRoute} from '../../const.ts';

export default function App () {
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<PageMain />}
          />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}
