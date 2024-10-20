import {describe} from 'vitest';
import {makeFakeCamera} from '../../utils/mocks.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import ProductCardSimilar from './product-card-similar.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: ProductCardSimilar', () => {
  it('should render correctly', () => {
    const expextedText = 'Подробнее';
    const fakeCamera = makeFakeCamera();
    const {withStoreComponent} = withStore(<ProductCardSimilar camera={fakeCamera} />);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expextedText)).toBeInTheDocument();
  });
});
