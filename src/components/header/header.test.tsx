import {describe} from 'vitest';
import Header from './header.tsx';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';

describe('Component: Header', () => {
  it('should render correctly', () => {
    const headerTestId = 'header';
    const fakeCameras = [makeFakeCamera()];
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: fakeCameras,
        camera: null,
        similarCameras: []
      }
    });

    const {withStoreComponent} = withStore(<Header />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    expect(screen.getByTestId(headerTestId)).toBeInTheDocument();
  });
});
