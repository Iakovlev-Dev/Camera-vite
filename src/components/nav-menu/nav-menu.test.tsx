import {describe, expect} from 'vitest';
import NavMenu from './nav-menu.tsx';
import {render, screen} from '@testing-library/react';
import {withHistory} from '../../utils/mock-component.tsx';

describe('Component: NavMenu', () => {
  it('should render correctly', () => {
    const navMenuTestId = 'nav-menu';
    const preparedComponent = withHistory(<NavMenu />);

    render(preparedComponent);

    expect(screen.getByTestId(navMenuTestId)).toBeInTheDocument();
  });
});
