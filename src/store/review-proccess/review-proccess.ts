import {createSlice} from '@reduxjs/toolkit';
import {TReviews} from '../../types/type-reviews.ts';
import {NameSpace} from '../../const.ts';
import {fetchReviewsAction} from '../api-actions.ts';

type TInitialStateReviews = {
  reviews: TReviews;
}

const initialState:TInitialStateReviews = {
  reviews: []
};

export const reviewProcess = createSlice({
  name: NameSpace.REVIEWS,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      });
  }
});
