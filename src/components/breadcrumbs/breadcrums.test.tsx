import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import Breadcrumbs from './breadcrumbs.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    const fakeCameras = [makeFakeCamera()];
    const breadcrumbsTestId = 'breadcrumbs';
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: fakeCameras,
        camera: null,
        similarCameras: [],
        currentPage: 1
      }
    });
    const {withStoreComponent} = withStore(<Breadcrumbs />, fakeStore);

    const preparedComponent = withHistory(withStoreComponent)

    render(preparedComponent);

    expect(screen.getByTestId(breadcrumbsTestId)).toBeInTheDocument();
  });
});
