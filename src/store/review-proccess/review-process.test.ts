import {describe, expect} from 'vitest';
import {reviewProcess} from './review-proccess.ts';
import {makeFakeReview} from '../../utils/mocks.ts';
import {fetchReviewsAction} from '../api-actions.ts';

describe('ReviewProcess Slice', () => {
  it('should return initial state with empty state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      reviews: []
    };

    const result = reviewProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty action and undefined state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      reviews: []
    };

    const result = reviewProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "reviews" to array with fetchReviewsAction.fulfilled', () => {
    const fakeReview = makeFakeReview();
    const expectedState = {
      reviews: [fakeReview]
    };

    const result = reviewProcess.reducer(undefined,
      fetchReviewsAction.fulfilled([fakeReview], '', (fakeReview.cameraId).toString()));

    expect(result).toEqual(expectedState);
  });
});
