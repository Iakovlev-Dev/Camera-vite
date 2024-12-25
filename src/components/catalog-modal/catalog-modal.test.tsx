import {describe, expect, it} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import CatalogModal from './catalog-modal.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: CatalogModal', () => {
  it('should render correctly', () => {
    const catalogModalTestId = 'catalog-modal';
    const fakeCameras = [makeFakeCamera()];
    const fakeIdCamera = fakeCameras[0].id;
    const fakeOnClose = vi.fn();
    const fakeOnAdd = vi.fn();
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: fakeCameras,
        camera: null,
        similarCameras: [],
        currentPage: null
      }
    });
    const {withStoreComponent} = withStore(<CatalogModal idCamera={fakeIdCamera} onClose={fakeOnClose} onAddItem={fakeOnAdd}/>, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(catalogModalTestId)).toBeInTheDocument();
  });
});
