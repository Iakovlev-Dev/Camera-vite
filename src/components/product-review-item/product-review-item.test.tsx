import {describe} from 'vitest';
import {makeFakeReview} from '../../utils/mocks.ts';
import ProductReviewItem from './product-review-item.tsx';
import {render, screen} from '@testing-library/react';


describe('Component: ProductReviewItem', () => {
  it('should render correctly', () => {
    const expectedText = 'Достоинства:';
    const fakeReview = makeFakeReview();

    render(<ProductReviewItem review={fakeReview}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
