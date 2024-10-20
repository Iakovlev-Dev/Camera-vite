import {describe} from 'vitest';
import Header from './header.tsx';
import {withHistory} from '../../utils/mock-component.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const headerTestId = 'header';
    const preparedComponent = withHistory(<Header />);

    render(preparedComponent);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
