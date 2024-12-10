import {createApi} from '../services/api.ts';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './root-redusers.ts';
import {redirect} from './middleware/redirect.ts';

const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    }).concat(redirect)
});
