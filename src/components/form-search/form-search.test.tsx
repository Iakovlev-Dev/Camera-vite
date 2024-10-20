import {describe, expect} from 'vitest';
import FormSearch from './form-search.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: FormSearch', () => {
  it('should render correctly', () => {
    const formSearchTestId = 'form-search';

    render(<FormSearch />);
    const searchFormContainer = screen.getByTestId(formSearchTestId);

    expect(searchFormContainer).toBeInTheDocument();
  });
});
