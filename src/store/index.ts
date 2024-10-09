import {createApi} from '../services/api.ts';
import {configureStore} from '@reduxjs/toolkit';
import {rootReducers} from './root-redusers.ts';

const api = createApi();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

console.log(store);
