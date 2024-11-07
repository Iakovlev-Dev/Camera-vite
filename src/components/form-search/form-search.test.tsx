import {describe, expect} from 'vitest';
import FormSearch from './form-search.tsx';
import {render, screen} from '@testing-library/react';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';

describe('Component: FormSearch', () => {
  it('should render correctly', () => {
    const formSearchTestId = 'form-search';
    const fakeCameras = [makeFakeCamera()];
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: fakeCameras,
        camera: null,
        similarCameras: []
      }
    });

    const {withStoreComponent} = withStore(<FormSearch />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);

    render(preparedComponent);

    const searchFormContainer = screen.getByTestId(formSearchTestId);
    expect(searchFormContainer).toBeInTheDocument();
  });
});
