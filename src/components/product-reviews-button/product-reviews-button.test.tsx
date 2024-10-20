import {describe, vi} from 'vitest';
import {render, screen} from '@testing-library/react';
import ProductReviewsButton from './product-reviews-button.tsx';

describe('Component: ProductReviewsButton', () => {
  it('should render correctly', () => {
    const expectedText = 'Показать больше отзывов';
    const fakeOnClick = vi.fn();

    render(<ProductReviewsButton onClick={fakeOnClick} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
