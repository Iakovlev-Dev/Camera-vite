import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withStore} from '../../utils/mock-component.tsx';
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
        similarCameras: []
      }
    });
    const {withStoreComponent} = withStore(<Breadcrumbs />, fakeStore);

    render(withStoreComponent);

    expect(screen.getByTestId(breadcrumbsTestId)).toBeInTheDocument();
  });
});
