import {describe, expect} from 'vitest';
import {NameSpace} from '../../const.ts';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {selectCamera, selectCameras, selectCurrentPage, selectSimilarCameras} from './selectors.ts';

describe('DataProcess Selectors', () => {
  const fakeCamera = makeFakeCamera();
  const state = makeFakeStore({
    [NameSpace.DATA_CARDS]: {
      cameras: [fakeCamera],
      camera: null,
      similarCameras: [fakeCamera],
      currentPage: 1
    }
  });

  it('should return cameras from state', () => {
    const {cameras} = state.DATA_CARDS;
    const result = selectCameras(state);

    expect(result).toEqual(cameras);
  });

  it('should return camera from state ', () => {
    const {camera} = state.DATA_CARDS;
    const result = selectCamera(state);

    expect(result).toEqual(camera);
  });

  it('should return similar cameras from state ', () => {
    const {similarCameras} = state.DATA_CARDS;
    const result = selectSimilarCameras(state);

    expect(result).toEqual(similarCameras);
  });

  it('should return current page from state', () => {
    const {currentPage} = state.DATA_CARDS;
    const result = selectCurrentPage(state);

    expect(result).toEqual(currentPage);
  });
});
