import {describe, expect} from 'vitest';
import ProductReviewsButtonUp from './product-reviews-button-up.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: ProductReviewsButtonUp', () => {
  it('should render correctly', () => {
    const prevButtonTestId = 'product-reviews-button-up';

    render(<ProductReviewsButtonUp />);

    expect(screen.getByTestId(prevButtonTestId)).toBeInTheDocument();
  });
});
