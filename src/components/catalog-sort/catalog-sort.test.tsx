import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import CatalogSort from './catalog-sort.tsx';

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    const expectedText = 'Сортировать:';

    render(<CatalogSort />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
