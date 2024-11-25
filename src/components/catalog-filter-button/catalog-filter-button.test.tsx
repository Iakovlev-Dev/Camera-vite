import {describe, expect} from 'vitest';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import CatalogFilterButton from './catalog-filter-button.tsx';
import {render, screen} from '@testing-library/react';


describe('Component: CatalogFilterButton', () => {
  it('should render correctly', () => {
    const expectedText = 'Сбросить фильтры';
    const {withStoreComponent} = withStore(<CatalogFilterButton />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
