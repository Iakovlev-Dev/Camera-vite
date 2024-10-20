import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakePromo, makeFakeStore} from '../../utils/mocks.ts';
import BannerPromo from './banner-promo.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {NameSpace} from '../../const.ts';

describe('Component: BannerPromo', () => {
  it('should render correctly', () => {
    const expectedText = 'Новинка!';
    const fakePromo = makeFakePromo();
    const fakeCameras = [makeFakeCamera()];
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: fakeCameras,
        camera: null,
        similarCameras: []
      }
    });
    const {withStoreComponent} = withStore(<BannerPromo promo={fakePromo} />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
