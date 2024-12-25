import {describe, expect} from 'vitest';
import Basket from './basket.tsx';
import {withStore} from '../../utils/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';

describe('Component Basket:', () => {
  it('should render correctly', () => {
    const expectedText = 'Корзина';

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
    const {withStoreComponent} = withStore(<Basket/>, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
