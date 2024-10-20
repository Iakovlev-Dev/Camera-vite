import {describe} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {withHistory, withStore} from '../../utils/mock-component.tsx';
import ProductSimilar from './product-similar.tsx';
import {render, screen} from '@testing-library/react';

describe('Component: ProductSimilar', () => {
  it('should render correctly', () => {
    const fakeSimilarCameras = [makeFakeCamera()];
    const expectedText = 'Похожие товары';
    const fakeStore = makeFakeStore({
      [NameSpace.DATA_CARDS]: {
        cameras: [],
        camera: null,
        similarCameras: fakeSimilarCameras
      }
    });

    const {withStoreComponent} = withStore(<ProductSimilar />, fakeStore);
    const preparedComponent = withHistory(withStoreComponent);
    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
