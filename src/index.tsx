import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App.tsx';
import {store} from './store';
import {fetchCameraCardsAction} from './store/api-actions.ts';
import {Provider} from 'react-redux';

store.dispatch(fetchCameraCardsAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
