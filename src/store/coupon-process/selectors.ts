import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectIsSuccessCoupon = (state: TState) => state[NameSpace.COUPON].isSuccessCoupon;
export const selectIsLoadingCoupon = (state: TState) => state[NameSpace.COUPON].isLoadingCoupon;
export const selectCoupon = (state: TState) => state[NameSpace.COUPON].coupon;
export const selectIsErrorCoupon = (state: TState) => state[NameSpace.COUPON].isErrorCoupon;
export const selectDiscount = (state: TState) => state[NameSpace.COUPON].discount;
