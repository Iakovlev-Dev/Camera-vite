import {describe, expect} from 'vitest';
import Footer from './footer.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: Footer', () => {
  it('should render correctly', () => {
    const expectedText = /Интернет-магазин фото- и видеотехники/i;

    render(<Footer />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
