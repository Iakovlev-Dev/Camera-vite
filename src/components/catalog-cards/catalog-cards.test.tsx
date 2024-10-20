import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import CatalogCards from './catalog-cards.tsx';
import {NameSpace} from '../../const.ts';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogCards', () => {
  it('should render correctly', () => {
    const catalogCardsTestId = 'catalog-cards';
    const fakeCameras = [makeFakeCamera()];
    const fakeOnClick = vi.fn();
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: fakeCameras,
        camera: null,
        similarCameras: []
      }
    });
    const {withStoreComponent} = withStore(<CatalogCards onClick={fakeOnClick} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(catalogCardsTestId)).toBeInTheDocument();
  });
});
