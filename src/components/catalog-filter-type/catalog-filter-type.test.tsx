import {describe, expect} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
import CatalogFilterType from './catalog-filter-type.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogFilterType', () => {
  it('should render correctly', () => {
    const expectedText = 'Тип камеры';
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

    const {withStoreComponent} = withStore(<CatalogFilterType />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});