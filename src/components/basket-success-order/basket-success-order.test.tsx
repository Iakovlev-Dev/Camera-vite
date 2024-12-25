import {describe, expect} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
import BasketSuccessOrder from './basket-success-order.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: BasketSuccessOrder', () => {
  it('should render correctly', () => {
    const expectedText = 'Вернуться к покупкам';
    const fakeStore = makeFakeStore({
      [NameSpace.BASKET]: {
        camerasIdBasket: [],
        isDeleteCamera: false,
        deleteIdCamera: null,
        orderAmount: 0,
        isOrderPostSuccess: false,
        isLoading: false,
        isErrorBasket: false,
      }
    });

    const {withStoreComponent} = withStore(<BasketSuccessOrder />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
