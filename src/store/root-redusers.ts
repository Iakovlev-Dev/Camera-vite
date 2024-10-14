import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const.ts';
import {dataCardProcess} from './data-card-process/data-card-process.ts';
import {reviewProcess} from './review-proccess/review-proccess.ts';

export const rootReducers = combineReducers({
  [NameSpace.DATA_CARDS]: dataCardProcess.reducer,
  [NameSpace.REVIEWS]: reviewProcess.reducer
});
