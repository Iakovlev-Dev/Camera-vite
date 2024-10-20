import {describe} from 'vitest';
import {makeFakeReview, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
import ProductReviews from './product-reviews.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: ProductReviews', () => {
  it('should render correctly', () => {
    const expectedText = 'Отзывы';
    const fakeReviews = [makeFakeReview()];
    const fakeStore = makeFakeStore({
      [NameSpace.REVIEWS]: {
        reviews: fakeReviews
      }
    });
    const {withStoreComponent} = withStore(<ProductReviews />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
