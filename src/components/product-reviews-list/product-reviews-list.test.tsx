import {describe, expect} from 'vitest';
import {makeFakeReview, makeFakeStore} from '../../utils/mocks.ts';
import {withStore} from '../../utils/mock-component.tsx';
import ProductReviewsList from './product-reviews-list.tsx';
import {NameSpace} from '../../const.ts';
import {render, screen} from '@testing-library/react';

describe('Component: ProductReviewsList', () => {
  it('should render correctly', () => {
    const productReviewsListTestId = 'product-reviews-list';
    const fakeReviews = [makeFakeReview()];
    const fakeCountReviews = 5;
    const fakeStore = makeFakeStore({
      [NameSpace.REVIEWS]: {
        reviews: fakeReviews
      }
    });

    const {withStoreComponent} = withStore(<ProductReviewsList countReviews={fakeCountReviews} />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByTestId(productReviewsListTestId)).toBeInTheDocument();
  });
});
