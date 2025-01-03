import {TAppDispatch, TState} from '../types/type-store.ts';
import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {TCameraArray, TCameraCard} from '../types/type-cards.ts';
import {APIRoute} from '../const.ts';
import {TOrder} from '../types/type-order.ts';
import {TReview, TReviews} from '../types/type-reviews.ts';
import {TPromoArray} from '../types/type-promo.ts';
import {TCouponPost} from '../components/basket-promo/basket-promo.tsx';
import {TReviewPost} from '../components/product-add-review-modal/product-add-review-modal.tsx';

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

export const fetchCameraCardAction = createAsyncThunk<TCameraCard, string, TAPIAction>('fetchCameraAction',
  async (id, {extra: api}) => {
    const {data} = await api.get<TCameraCard>(`${APIRoute.Cameras}/${id}`);
    return data;
  }
);

export const postOrder = createAsyncThunk<void, TOrder, TAPIAction>('postOrderAction',
  async (body, {extra: api}) => {
    await api.post(APIRoute.Orders, body);
  }
);

export const fetchReviewsAction = createAsyncThunk<TReviews, string, TAPIAction>('fetchReviewsAction',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${APIRoute.Cameras}/${id}/reviews`);
    return data;
  }
);

export const fetchPromo = createAsyncThunk<TPromoArray, undefined, TAPIAction>('fetchPromo',
  async (_args, {extra: api}) => {
    const {data} = await api.get<TPromoArray>(APIRoute.Promo);
    return data;
  }
);

export const fetchSimilarCameras = createAsyncThunk<TCameraArray, string, TAPIAction>('fetchSimilarCameras',
  async (id: string, {extra: api}) => {
    const {data} = await api.get<TCameraArray>(`${APIRoute.Cameras}/${id}/similar`);
    return data;
  }
);

export const postCoupon = createAsyncThunk<string, TCouponPost, TAPIAction>('postCoupon',
  async (couponBody, {extra: api}) => {
    const {data} = await api.post<string>(APIRoute.Coupons, couponBody);
    return data;
  }
);

export const postReview = createAsyncThunk<TReview, TReviewPost, TAPIAction>('postReview',
  async (reviewBody, {extra: api}) => {
    const {data} = await api.post<TReview>(APIRoute.Reviews, reviewBody);
    return data;
  }
);
