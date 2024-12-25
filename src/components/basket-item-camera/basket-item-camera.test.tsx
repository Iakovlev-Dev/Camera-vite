import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
import BasketItemCamera from './basket-item-camera.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: BasketItemCamera:', () => {
  it('should render correctly', () => {
    const expectedDataTestId = 'basket-item-camera';
    const fakeCamera = makeFakeCamera();
    const fakeStore = makeFakeStore({
      [NameSpace.BASKET]: {
        camerasIdBasket: [fakeCamera.id],
        isDeleteCamera: false,
        deleteIdCamera: null,
        orderAmount: 0,
        isOrderPostSuccess: false,
        isLoading: false,
        isErrorBasket: false,
      },
      [NameSpace.DATA_CARDS]: {
        cameras: [fakeCamera],
        camera: null,
        similarCameras: [],
        currentPage: null
      }
    });

    const {withStoreComponent} = withStore(<BasketItemCamera idCamera={fakeCamera.id} />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByTestId(expectedDataTestId)).toBeInTheDocument();
  });
});
