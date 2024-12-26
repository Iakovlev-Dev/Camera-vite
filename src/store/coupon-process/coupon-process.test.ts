import {describe, expect} from 'vitest';
import {couponProcess, setCouponBasket, setDiscount, setIsErrorCoupon, setIsSuccessCoupon} from './coupon-process.ts';
import {postCoupon} from '../api-actions.ts';
import {TCouponPost} from '../../components/basket-promo/basket-promo.tsx';

describe('CouponProcess Slice', () => {
  it('should return state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      discount: '',
      coupon: null,
      isLoadingCoupon: false,
      isSuccessCoupon: false,
      isErrorCoupon: false,
    };

    const result = couponProcess.reducer(expectedState, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should return state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      discount: '',
      coupon: null,
      isLoadingCoupon: false,
      isSuccessCoupon: false,
      isErrorCoupon: false,
    };

    const result = couponProcess.reducer(undefined, emptyAction);
    expect(result).toEqual(expectedState);
  });

  it('should set discount with setDiscount', () => {
    const expectedState = {
      discount: '15',
      coupon: null,
      isLoadingCoupon: false,
      isSuccessCoupon: false,
      isErrorCoupon: false,
    };

    const result = couponProcess.reducer(
      undefined, setDiscount('15')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set isSuccessCoupon with setIsSuccessCoupon', () => {
    const expectedState = {
      discount: '',
      coupon: null,
      isLoadingCoupon: false,
      isSuccessCoupon: true,
      isErrorCoupon: false,
    };

    const result = couponProcess.reducer(
      undefined, setIsSuccessCoupon(true),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set coupon with setCouponBasket', () => {
    const expectedState = {
      discount: '',
      coupon: 'camera-333',
      isLoadingCoupon: false,
      isSuccessCoupon: false,
      isErrorCoupon: false,
    };

    const result = couponProcess.reducer(
      undefined, setCouponBasket('camera-333'),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set isErrorCoupon with setIsErrorCoupon', () => {
    const expectedState = {
      discount: '',
      coupon: null,
      isLoadingCoupon: false,
      isSuccessCoupon: false,
      isErrorCoupon: true,
    };

    const result = couponProcess.reducer(
      undefined, setIsErrorCoupon(true),
    );

    expect(result).toEqual(expectedState);
  });

  const fakePostCoupon: TCouponPost = {
    coupon: 'camera-333',
  };

  it('should set discount, isLoadingCoupon, isSuccessCoupon, isErrorCoupon with postCoupon.fulfilled', () => {
    const expectedState = {
      discount: '15',
      coupon: null,
      isLoadingCoupon: false,
      isSuccessCoupon: true,
      isErrorCoupon: false,
    };

    const result = couponProcess.reducer(
      undefined, postCoupon.fulfilled('15', '', fakePostCoupon),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set isLoadingCoupon with postCoupon.pending', () => {
    const expectedState = {
      discount: '',
      coupon: null,
      isLoadingCoupon: true,
      isSuccessCoupon: false,
      isErrorCoupon: false,
    };

    const result = couponProcess.reducer(
      undefined, postCoupon.pending('', fakePostCoupon),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set isLoadingCoupon with postCoupon.rejected', () => {
    const expectedState = {
      discount: '',
      coupon: null,
      isLoadingCoupon: false,
      isSuccessCoupon: false,
      isErrorCoupon: true,
    };

    const result = couponProcess.reducer(
      undefined, postCoupon.rejected(null, '', fakePostCoupon),
    );

    expect(result).toEqual(expectedState);
  });
});
