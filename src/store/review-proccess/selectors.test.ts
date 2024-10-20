import {describe, expect} from 'vitest';
import {makeFakeReview, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {selectReviews} from './selectors.ts';

describe('ReviewProcess Selectors', () => {
  const fakeReview = makeFakeReview();
  const state = makeFakeStore({
    [NameSpace.REVIEWS]: {
      reviews: [fakeReview],
    }
  });

  it('should return reviews from state', () => {
    const {reviews} = state.REVIEWS;
    const result = selectReviews(state);

    expect(result).toEqual(reviews);
  });
});
