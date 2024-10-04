import {TAppDispatch, TState} from '../types/type-store.ts';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TCameraArray} from '../types/type-cards.ts';
import {APIRoute} from '../const.ts';

export type TAPIAction = {
  dispatch: TAppDispatch;
  store: TState;
  extra: AxiosInstance;
}

export const fetchCameraCardsAction = createAsyncThunk<TCameraArray, undefined, TAPIAction>('fetchCameras',
  async (_args, {extra: api}) => {
    const {data} = await api.get<TCameraArray>(APIRoute.Cameras);
    return data;
  }
);
