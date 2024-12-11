import {rootReducer} from '../root-redusers.ts';
import {Middleware, PayloadAction} from '@reduxjs/toolkit';
import {browserHistory} from '../../browser-history.ts';
import {ActionType} from '../../const.ts';

type TReducer = ReturnType<typeof rootReducer>

export const redirect: Middleware <unknown, TReducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === ActionType.RedirectToRoute) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
