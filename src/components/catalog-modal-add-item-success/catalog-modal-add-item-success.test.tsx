import {describe, expect} from 'vitest';
import {withHistory} from '../../utils/mock-component.tsx';
import CatalogModalAddItemSuccess from './catalog-modal-add-item-success.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogModalAddItemSuccess', () => {
  it('should render correctly', () => {
    const expectedText = 'Товар успешно добавлен в корзину';

    const fakeOnClose = vi.fn();

    const preparedComponent = withHistory(<CatalogModalAddItemSuccess onClose={fakeOnClose}/>);
    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
