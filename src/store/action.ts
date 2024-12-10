import {createAction} from '@reduxjs/toolkit';
import {AppRoute} from '../const.ts';

export const redirectToRote = createAction<AppRoute>('redirectToRote');
