import {describe, expect} from 'vitest';
import {dataCardProcess} from './data-card-process.ts';
import {makeFakeCamera} from '../../utils/mocks.ts';
import {fetchCameraCardAction, fetchCameraCardsAction, fetchSimilarCameras} from '../api-actions.ts';

describe('DataCardProcess Slice', () => {
  it('Should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      cameras: [],
      camera: null,
      similarCameras: [],
      currentPage: 1
    };

    const result = dataCardProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('Should return initial state with empty state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      cameras: [],
      camera: null,
      similarCameras: [],
      currentPage: 1
    };

    const result = dataCardProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "cameras" to array with camera with fetchCameraCardsAction.fulfilled', () => {
    const fakeCamera = makeFakeCamera();
    const expectedState = {
      cameras: [fakeCamera],
      camera: null,
      similarCameras: [],
      currentPage: 1
    };

    const result = dataCardProcess.reducer(
      undefined, fetchCameraCardsAction.fulfilled([fakeCamera], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "camera" to array with fetchCameraCardAction.fulfilled', () => {
    const fakeCamera = makeFakeCamera();
    const expectedState = {
      cameras: [],
      camera: fakeCamera,
      similarCameras: [],
      currentPage: 1
    };

    const result = dataCardProcess.reducer(
      undefined, fetchCameraCardAction.fulfilled(fakeCamera, '', (fakeCamera.id).toString())
    );

    expect(result).toEqual(expectedState);
  });

  it('should set similarCameras to array with fetchSimilarCameras.fulfilled', () => {
    const fakeSimilarCamera = makeFakeCamera();
    const expectedState = {
      cameras: [],
      camera: null,
      similarCameras: [fakeSimilarCamera],
      currentPage: 1
    };

    const result = dataCardProcess.reducer(
      undefined, fetchSimilarCameras.fulfilled([fakeSimilarCamera], '', (fakeSimilarCamera.id).toString()));

    expect(result).toEqual(expectedState);
  });
});
