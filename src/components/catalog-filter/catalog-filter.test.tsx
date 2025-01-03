import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import CatalogFilter from './catalog-filter.tsx';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';

describe('Component: CatalogFilter', () => {
  it('should render correctly', () => {
    const expectedText = 'Фильтр';
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

    const {withStoreComponent} = withStore(<CatalogFilter />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
