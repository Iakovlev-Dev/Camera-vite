import {describe, expect} from 'vitest';
import {withHistory} from '../../utils/mock-component.tsx';
import ButtonInBasket from './button-in-basket.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: ButtonInBasket', () => {
  it('should render correctly', () => {
    const expectedText = 'В корзине';

    const preparedComponent = withHistory(<ButtonInBasket />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
