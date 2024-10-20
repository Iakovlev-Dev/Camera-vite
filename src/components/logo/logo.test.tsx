import {describe, expect} from 'vitest';
import Logo from './logo.tsx';
import {render, screen} from '@testing-library/react';
import {withHistory} from '../../utils/mock-component.tsx';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const logoTestId = 'logo';
    const preparedComponent = withHistory(<Logo />);

    render(preparedComponent);

    expect(screen.getByTestId(logoTestId)).toBeInTheDocument();
  });
});
