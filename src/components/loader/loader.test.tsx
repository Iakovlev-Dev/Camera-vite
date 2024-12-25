import {describe, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import Loader from './loader.tsx';

describe('Component: Loader', () => {
  it('should render correctly', () => {
    const expectedTestId = 'loader';

    render(<Loader />);

    expect(screen.getByTestId(expectedTestId)).toBeInTheDocument();
  });
});
