import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
import BasketSummeryOrder from './basket-summery-order.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: BasketSummeryOrder', () => {
  it('should render correctly', () => {
    const expectedText = 'Оформить заказ';
    const fakeCamera = makeFakeCamera();
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: [fakeCamera],
        camera: null,
        similarCameras: [],
        currentPage: null
      },
      [NameSpace.PROMO]: {
        promo: [fakeCamera],
      },
      [NameSpace.BASKET]: {
        camerasIdBasket: [fakeCamera.id],
        isDeleteCamera: false,
        deleteIdCamera: null,
        orderAmount: fakeCamera.price,
        isOrderPostSuccess: false,
        isLoading: false,
        isErrorBasket: false,
      }
    });

    const {withStoreComponent} = withStore(<BasketSummeryOrder />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
