import {describe} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import ProductCardSimilar from './product-card-similar.tsx';
import {render, screen} from '@testing-library/react';
import {NameSpace} from '../../const.ts';

describe('Component: ProductCardSimilar', () => {
  it('should render correctly', () => {
    const expectedText = 'Подробнее';
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
      }
    });
    const fakeOnClick = vi.fn();

    const {withStoreComponent} = withStore(<ProductCardSimilar camera={fakeCamera} onClick={fakeOnClick}/>, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
