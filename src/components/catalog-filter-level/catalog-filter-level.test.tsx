import {describe, expect} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
import CatalogFilterLevel from './catalog-filter-level.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogFilterLevel', () => {
  it('should render correctly', ()=> {
    const filterLevelTestId = 'catalogFilterLevel';
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

    const {withStoreComponent} = withStore(<CatalogFilterLevel />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByTestId(filterLevelTestId)).toBeInTheDocument();
  });
});
