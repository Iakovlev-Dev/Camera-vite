import {describe, expect} from 'vitest';
import BasketPromo from './basket-promo.tsx';
import {render, screen} from '@testing-library/react';
import { withStore} from '../../utils/mock-component.tsx';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';

describe('Component: BasketPromo', () => {
  it('should render correctly', () => {
    const expectedText = 'Промокод';
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

    const {withStoreComponent} = withStore(<BasketPromo />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
