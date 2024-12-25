import {describe, expect} from 'vitest';
import {makeFakeCamera} from '../../utils/mocks.ts';
import {render, screen} from '@testing-library/react';
import ButtonBuy from './button-buy.tsx';

describe('Component: ButtonBuy', () => {
  it('should render correctly', () => {
    const expectedText = 'Купить';
    const fakeOnClick = vi.fn();
    const fakeCamera = makeFakeCamera();

    render(<ButtonBuy onClick={fakeOnClick} card={fakeCamera} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
