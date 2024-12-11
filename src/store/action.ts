import {createAction} from '@reduxjs/toolkit';
import {ActionType, AppRoute} from '../const.ts';

export const redirectToRote = createAction<AppRoute>(ActionType.RedirectToRoute);
