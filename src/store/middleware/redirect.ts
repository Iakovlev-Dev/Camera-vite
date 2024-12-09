import {rootReducer} from '../root-redusers.ts';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {browserHistory} from '../../browser-history.ts';

type TReducer = ReturnType<typeof rootReducer>

export const redirect: Middleware <unknown, TReducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === 'redirectToRote') {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
