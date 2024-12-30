import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TReviews} from '../../types/type-reviews.ts';
import {NameSpace} from '../../const.ts';
import {fetchReviewsAction, postReview} from '../api-actions.ts';

type TInitialStateReviews = {
  reviews: TReviews;
  isLoadingReviews: boolean;
  isLoadingSuccessReview: boolean;
}

const initialState:TInitialStateReviews = {
  reviews: [],
  isLoadingReviews: false,
  isLoadingSuccessReview: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.REVIEWS,
  initialState,
  reducers: {
    setIsLoadingReviews: (state, action: PayloadAction<boolean>) => {
      state.isLoadingSuccessReview = action.payload;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews = [...state.reviews, action.payload];
        state.isLoadingReviews = false;
        state.isLoadingSuccessReview = true;
      })
      .addCase(postReview.pending, (state) => {
        state.isLoadingReviews = true;
      })
      .addCase(postReview.rejected, (state) => {
        state.isLoadingReviews = false;
      });
  }
});

export const {setIsLoadingReviews} = reviewProcess.actions;
