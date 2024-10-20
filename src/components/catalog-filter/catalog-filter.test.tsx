import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import CatalogFilter from './catalog-filter.tsx';

describe('Component: CatalogFilter', () => {
  it('should render correctly', () => {
    const expectedText = 'Фильтр';

    render(<CatalogFilter />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
