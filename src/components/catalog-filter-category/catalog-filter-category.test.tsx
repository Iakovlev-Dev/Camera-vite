import {describe, expect} from 'vitest';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import CatalogFilterCategories from './catalog-filter-category.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';

describe('Component: CatalogFilterCategory', () => {
  it('should render correctly', () => {
    const catalogCategoryTestId = 'catalogFilterCategory';
    const fakeStore = makeFakeStore({
      [NameSpace.FILTERS]: {
        filterCategory: '',
        filterType: [],
        filterLevel: [],
        filterPriceUp: '',
        filterPriceDown: '',
        filteredCameras: []
      }
    });

    const {withStoreComponent} = withStore(<CatalogFilterCategories />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(catalogCategoryTestId)).toBeInTheDocument();
  });
});
