import {describe} from 'vitest';
import {withStore} from '../../utils/mock-component.tsx';
import CatalogCardRating from './catalog-card-rating.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogCardRating', () => {
  it('should render correctly', () => {
    const catalogCardTestId = 'catalog-card-rating';
    const fakeCountRating = 5;
    const fakeCountReviews = 10;
    const {withStoreComponent} = withStore(<CatalogCardRating countRating={fakeCountRating} countReviews={fakeCountReviews} />);

    render(withStoreComponent);

    expect(screen.getByTestId(catalogCardTestId)).toBeInTheDocument();
  });
});
