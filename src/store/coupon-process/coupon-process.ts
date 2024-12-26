import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {postCoupon} from '../api-actions.ts';

type TInitialState = {
  discount: string;
  coupon: string | null;
  isLoadingCoupon: boolean;
  isSuccessCoupon: boolean;
  isErrorCoupon: boolean;
}

const initialState: TInitialState = {
  discount: '',
  coupon: null,
  isLoadingCoupon: false,
  isSuccessCoupon: false,
  isErrorCoupon: false,
};

export const couponProcess = createSlice({
  name: NameSpace.COUPON,
  initialState,
  reducers: {
    setIsSuccessCoupon: (state, action: PayloadAction<boolean>) => {
      state.isSuccessCoupon = action.payload;
    },
    setCouponBasket: (state, action: PayloadAction<string | null>) => {
      state.coupon = action.payload;
    },
    setDiscount: (state, action: PayloadAction<string>) => {
      state.discount = action.payload;
    },
    setIsErrorCoupon: (state, action: PayloadAction<boolean>) => {
      state.isErrorCoupon = action.payload;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(postCoupon.fulfilled, (state, action) => {
        state.discount = action.payload;
        state.isLoadingCoupon = false;
        state.isSuccessCoupon = true;
        state.isErrorCoupon = false;
      })
      .addCase(postCoupon.pending, (state) => {
        state.isLoadingCoupon = true;
      })
      .addCase(postCoupon.rejected, (state) => {
        state.isLoadingCoupon = false;
        state.isErrorCoupon = true;
        state.isSuccessCoupon = false;
        state.coupon = null;
        state.discount = '';
      });
  }
});

export const {
  setIsSuccessCoupon,
  setCouponBasket,
  setDiscount,
  setIsErrorCoupon
} = couponProcess.actions;
