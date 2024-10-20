import {describe, expect} from 'vitest';
import Catalog from './catalog.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';

describe('Component: Catalog', () => {
  it('should render correctly', () => {
    const expectedText = 'Каталог фото- и видеотехники';
    const fakeCameras = [makeFakeCamera()];
    const fakeOnClick = vi.fn();
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: fakeCameras,
        camera: null,
        similarCameras: []
      }
    });
    const {withStoreComponent} = withStore(<Catalog onClick={fakeOnClick} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
