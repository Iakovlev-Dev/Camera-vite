import {describe, expect} from 'vitest';
import BasketPromo from './basket-promo.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: BasketPromo', () => {
  it('should render correctly', () => {
    const expectedText = 'Промокод';

    render(<BasketPromo />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
