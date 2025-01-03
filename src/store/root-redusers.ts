import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const.ts';
import {dataCardProcess} from './data-card-process/data-card-process.ts';
import {reviewProcess} from './review-proccess/review-proccess.ts';
import {promoProcess} from './promo-process/promo-process.ts';
import {sortingProcess} from './sorting-filtered-process/sorting-process.ts';
import {filterProcess} from './filters-process/filter-process.ts';
import {basketProcess} from './basket-process/basket-process.ts';
import {couponProcess} from './coupon-process/coupon-process.ts';

export const rootReducer = combineReducers({
  [NameSpace.DATA_CARDS]: dataCardProcess.reducer,
  [NameSpace.REVIEWS]: reviewProcess.reducer,
  [NameSpace.PROMO]: promoProcess.reducer,
  [NameSpace.SORTING]: sortingProcess.reducer,
  [NameSpace.FILTERS]: filterProcess.reducer,
  [NameSpace.BASKET]: basketProcess.reducer,
  [NameSpace.COUPON]: couponProcess.reducer
});
