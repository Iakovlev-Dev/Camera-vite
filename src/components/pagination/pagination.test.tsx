import {describe, expect} from 'vitest';
import {withStore} from '../../utils/mock-component.tsx';
import Pagination from './pagination.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';


describe('Component: Pagination', () => {
  it('should render correctly', () => {
    const expectedTestId = 'pagination-test';
    const fakeFilteredCameras = Array.from({length: 20}, () => makeFakeCamera());
    const fakeState = makeFakeStore({
      [NameSpace.FILTERS]: {
        filterCategory: '',
        filterType: [],
        filterLevel: [],
        filterPriceUp: '',
        filterPriceDown: '',
        filteredCameras: fakeFilteredCameras
      },
    });

    const {withStoreComponent} = withStore(<Pagination />, fakeState);

    render(withStoreComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
