import {describe} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
import BasketList from './basket-list.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: BasketList:', () => {
  it('should render correctly.', () => {
    const expectedDataTestId = 'basket-list';
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

    const {withStoreComponent} = withStore(<BasketList />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByTestId(expectedDataTestId)).toBeInTheDocument();
  });
});
