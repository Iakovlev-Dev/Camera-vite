import {TAppDispatch, TState} from '../types/type-store.ts';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TCameraArray, TCameraCard} from '../types/type-cards.ts';
import {APIRoute} from '../const.ts';
import {TOrder} from '../types/type-order.ts';

export type TAPIAction = {
  dispatch: TAppDispatch;
  store: TState;
  extra: AxiosInstance;
}

export const fetchCameraCardsAction = createAsyncThunk<TCameraArray, undefined, TAPIAction>('fetchCamerasAction',
  async (_args, {extra: api}) => {
    const {data} = await api.get<TCameraArray>(APIRoute.Cameras);
    return data;
  }
);

export const fetchCameraCardAction = createAsyncThunk<TCameraCard, string, TAPIAction>('fetchCameraCardAction',
  async (cameraId, {extra: api, dispatch}) => {
    const {data} = await api.get<TCameraCard>(`${APIRoute.Cameras}/${cameraId}`);
    dispatch(fetchCameraCardAction(cameraId));
    return data;
  }
);

export const postOrder = createAsyncThunk<void, TOrder, TAPIAction>('postOrderAction',
  async (body, {extra: api}) => {
    await api.post(APIRoute.Orders, body);
  }
);

