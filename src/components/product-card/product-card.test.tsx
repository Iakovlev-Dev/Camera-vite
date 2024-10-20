import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import ProductCard from './product-card.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: ProductCard', () => {
  it('should render component', () => {
    const productCardTestId = 'product-card';
    const fakeCamera = makeFakeCamera();
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: [fakeCamera],
        camera: fakeCamera,
        similarCameras: []
      }
    });
    const {withStoreComponent} = withStore(<ProductCard />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(productCardTestId)).toBeInTheDocument();
  });
});
