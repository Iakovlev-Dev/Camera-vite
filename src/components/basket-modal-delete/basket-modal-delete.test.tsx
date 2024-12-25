import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import BasketModalDelete from './basket-modal-delete.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: BasketModalDelete', () => {
  it('should render correctly', () => {
    const expectedText = 'basket-modal-delete';
    const fakeCamera = makeFakeCamera();
    const fakeStore = makeFakeStore({
      [NameSpace.BASKET]: {
        camerasIdBasket: [fakeCamera.id],
        isDeleteCamera: false,
        deleteIdCamera: fakeCamera.id,
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

    const {withStoreComponent} = withStore(<BasketModalDelete />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByTestId(expectedText)).toBeInTheDocument();
  });
});
