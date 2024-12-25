import {describe, expect} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import BasketIcon from './basket-icon.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {screen, render} from '@testing-library/react';

describe('Component: Basket-icon:', () => {
  it('should render correctly', () => {
    const expectedTestId = 'basket-icon-test';
    const fakeStore = makeFakeStore({
      [NameSpace.BASKET]: {
        camerasIdBasket: [1],
        isDeleteCamera: false,
        deleteIdCamera: null,
        orderAmount: 0,
        isOrderPostSuccess: false,
        isLoading: false,
        isErrorBasket: false,
      }
    });

    const {withStoreComponent} = withStore(<BasketIcon />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
