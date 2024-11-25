import {describe, expect} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import CatalogFilterPrice from './catalog-filter-price.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogFilterPrice', () => {
  it('should render correctly', ()=> {
    const filterPriceTestId = 'filterPrice';
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

    const {withStoreComponent} = withStore(<CatalogFilterPrice />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(filterPriceTestId)).toBeInTheDocument();
  });
});
