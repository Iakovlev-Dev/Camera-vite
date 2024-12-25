import {describe, expect} from 'vitest';
import BasketSummary from './basket-summary.tsx';
import {render, screen} from '@testing-library/react';
import {withStore} from '../../utils/mock-component.tsx';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';

describe('Component: BasketSummary', () => {
  it('should render correctly', () => {
    const expectedDataTestId = 'basket-summary';
    const fakeCamera = makeFakeCamera();
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: [fakeCamera],
        camera: null,
        similarCameras: [],
        currentPage: null
      }
    });

    const {withStoreComponent} = withStore(<BasketSummary />, fakeStore);
    render(withStoreComponent);

    expect(screen.getByTestId(expectedDataTestId)).toBeInTheDocument();
  });
});
