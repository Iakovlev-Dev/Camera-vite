import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import ReviewRating from './review-rating.tsx';

describe('Component: ReviewRating', () => {
  it('should render correctly', () => {
    const reviewRatingTestId = 'review-rating';
    const fakeCountRating = 4;

    render(<ReviewRating countRating={fakeCountRating} />);

    expect(screen.getByTestId(reviewRatingTestId)).toBeInTheDocument();
  });
});
