import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import CatalogCard from './catalog-card.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogCard', () => {
  it('should render correctly', () => {
    const catalogCardTestId = 'catalog-card';
    const fakeCamera = makeFakeCamera();
    const fakeOnClick = vi.fn();
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: [fakeCamera],
        camera: fakeCamera,
        similarCameras: []
      }
    });
    const {withStoreComponent} = withStore(<CatalogCard card={fakeCamera} onClick={fakeOnClick} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(catalogCardTestId)).toBeInTheDocument();
  });
});
