import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import CatalogSort from './catalog-sort.tsx';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';

describe('Component: CatalogSort', () => {
  it('should render correctly', () => {
    const expectedText = 'Сортировать:';
    const fakeStore = makeFakeStore({
      [NameSpace.SORT_FILTER]: {
        sortOrder: 'По цене',
        sortInner: 'По возрастанию'
      }
    });

    const {withStoreComponent} = withStore(<CatalogSort />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
