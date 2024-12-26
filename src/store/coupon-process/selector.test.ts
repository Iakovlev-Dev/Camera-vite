import {describe, expect} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {selectCoupon, selectDiscount, selectIsErrorCoupon} from './selectors.ts';
import {selectIsLoading} from '../basket-process/selectors.ts';

describe('BasketProcess selectors', () => {
  const fakeStore = makeFakeStore({
    [NameSpace.COUPON]: {
      discount: '15',
      coupon: 'coupon-333',
      isLoadingCoupon: false,
      isSuccessCoupon: false,
      isErrorCoupon: false,
    }
  });
  it('should return isSuccessCoupon', () => {
    const {discount} = fakeStore.COUPON;
    const result = selectDiscount(fakeStore);

    expect(result).toEqual(discount);
  });

  it('should return isLoadingCoupon', () => {
    const {isLoadingCoupon} = fakeStore.COUPON;
    const result = selectIsLoading(fakeStore);

    expect(result).toEqual(isLoadingCoupon);
  });

  it('should return coupon', () => {
    const {coupon} = fakeStore.COUPON;
    const result = selectCoupon(fakeStore);

    expect(coupon).toEqual(result);
  });

  it('should return isErrorCoupon', () => {
    const {isErrorCoupon} = fakeStore.COUPON;
    const result = selectIsErrorCoupon(fakeStore);

    expect(isErrorCoupon).toEqual(result);
  });

  it('should return selectDiscount', () => {
    const {discount} = fakeStore.COUPON;
    const result = selectDiscount(fakeStore);

    expect(discount).toEqual(result);
  });
});
