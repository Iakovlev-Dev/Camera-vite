import {beforeEach, describe, expect} from 'vitest';
import {createApi} from '../services/api.ts';
import MockAdapter from 'axios-mock-adapter';
import thunk from 'redux-thunk';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {TState} from '../types/type-store.ts';
import {Action} from 'redux';
import {
  extractActionsType,
  makeFakeCamera,
  makeFakeOrderRequest, makeFakePromo,
  makeFakeReview,
  TAppThunkDispatch
} from '../utils/mocks.ts';
import {APIRoute, NameSpace} from '../const.ts';
import {
  fetchCameraCardAction,
  fetchCameraCardsAction,
  fetchPromo,
  fetchReviewsAction, fetchSimilarCameras,
  postOrder
} from './api-actions.ts';

describe('Async actions', () => {
  const axios = createApi();
  const axiosMockAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<TState, Action<string>, TAppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({
      [NameSpace.DATA_CARDS]: {
        cameras: [],
        camera: null,
        similarCameras: []
      },
      [NameSpace.REVIEWS]: { reviews: []},
      [NameSpace.PROMO]: { promo: []}
    });
  });

  describe('fetchCameraCardsAction', () => {
    it('should dispatch "fetchCameraCardsAction.pending", "fetchCameraCardsAction.fulfilled" when server response 200', async () => {
      const fakeCamera = makeFakeCamera();
      axiosMockAdapter.onGet(APIRoute.Cameras).reply(200, [fakeCamera]);

      await store.dispatch(fetchCameraCardsAction());

      const emittedActions = store.getActions();
      const extractedActionsType = extractActionsType(emittedActions);
      const fetchCamerasCardsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCameraCardsAction.fulfilled>;


      expect(extractedActionsType).toEqual([
        fetchCameraCardsAction.pending.type,
        fetchCameraCardsAction.fulfilled.type
      ]);

      expect(fetchCamerasCardsActionFulfilled.payload).toEqual([fakeCamera]);
    });

    it('should dispatch "fetchCameraCardsAction.pending", "fetchCameraCardsAction.rejected" when server response 200', async () => {
      axiosMockAdapter.onGet(APIRoute.Cameras).reply(400);

      await store.dispatch(fetchCameraCardsAction());
      const emittedActions = store.getActions();
      const extractedActionsType = extractActionsType(emittedActions);

      expect(extractedActionsType).toEqual([
        fetchCameraCardsAction.pending.type,
        fetchCameraCardsAction.rejected.type
      ]);
    });
  });

  describe('fetchCameraCardAction', () => {
    it('should dispatch "fetchCameraCardAction.pending", "fetchCameraCardAction.fulfilled" when server response 200', async () => {
      const fakeCamera = makeFakeCamera();
      axiosMockAdapter.onGet(`${APIRoute.Cameras}/${fakeCamera.id}`).reply(200, fakeCamera);

      await store.dispatch(fetchCameraCardAction((fakeCamera.id).toString()));

      const emittedActions = store.getActions();
      const extractedActionsType = extractActionsType(emittedActions);
      const fetchCameraCardFulfilled = emittedActions.at(1) as ReturnType<typeof fetchCameraCardAction.fulfilled>;

      expect(extractedActionsType).toEqual([
        fetchCameraCardAction.pending.type,
        fetchCameraCardAction.fulfilled.type
      ]);

      expect(fetchCameraCardFulfilled.payload).toEqual(fakeCamera);
    });
  });

  describe('postOrder', () => {
    it('should dispatch "postOrder.pending", "postOrder.fulfilled" when server response 200"', async () => {
      axiosMockAdapter.onPost(APIRoute.Orders).reply(200);
      const fakeOrder = makeFakeOrderRequest();

      await store.dispatch(postOrder(fakeOrder));

      const emittedActions = store.getActions();
      const extractedActionsType = extractActionsType(emittedActions);

      expect(extractedActionsType).toEqual([
        postOrder.pending.type,
        postOrder.fulfilled.type
      ]);
    });
  });

  describe('fetchReviewsAction', () => {
    it('should dispatch "fetchReviews.pending", "fetchReviews.fulfilled" when server response 200', async () => {
      const fakeReview = makeFakeReview();
      axiosMockAdapter.onGet(`${APIRoute.Cameras}/${fakeReview.cameraId}/reviews`).reply(200, [fakeReview]);

      await store.dispatch(fetchReviewsAction((fakeReview.cameraId).toString()));

      const emittedActions = store.getActions();
      const extractedActionsType = extractActionsType(emittedActions);
      const fetchReviewsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchReviewsAction.fulfilled>;

      expect(extractedActionsType).toEqual([
        fetchReviewsAction.pending.type,
        fetchReviewsAction.fulfilled.type
      ]);

      expect(fetchReviewsActionFulfilled.payload).toEqual([fakeReview]);
    });
  });

  describe('fetchPromo', () => {
    it('should dispatch "fetchPromo.pending", "fetchPromo.fulfilled" when server response 200"', async () => {
      const fakePromo = makeFakePromo();
      axiosMockAdapter.onGet(APIRoute.Promo).reply(200, [fakePromo]);

      await store.dispatch(fetchPromo());

      const emittedAction = store.getActions();
      const extractedActionsType = extractActionsType(emittedAction);
      const fetchPromoFulfilled = emittedAction.at(1) as ReturnType<typeof fetchPromo.fulfilled>;

      expect(extractedActionsType).toEqual([
        fetchPromo.pending.type,
        fetchPromo.fulfilled.type
      ]);

      expect(fetchPromoFulfilled.payload).toEqual([fakePromo]);
    });
  });

  describe('fetchSimilarCameras', () => {
    it('should dispatch "fetchSimilarCameras.pending", "fetchSimilarCameras.fulfilled" when server response 200"', async () => {
      const fakeSimilarCamera = makeFakeCamera();
      axiosMockAdapter.onGet(`${APIRoute.Cameras}/${fakeSimilarCamera.id}/similar`).reply(200, [fakeSimilarCamera]);

      await store.dispatch(fetchSimilarCameras((fakeSimilarCamera.id).toString()));

      const emittedActionsType = store.getActions();
      const extractedActionsType = extractActionsType(emittedActionsType);
      const fetchSimilarCamerasFulfilled = emittedActionsType.at(1) as ReturnType<typeof fetchSimilarCameras.fulfilled>;

      expect(extractedActionsType).toEqual([
        fetchSimilarCameras.pending.type,
        fetchSimilarCameras.fulfilled.type
      ]);

      expect(fetchSimilarCamerasFulfilled.payload).toEqual([fakeSimilarCamera]);
    });
  });
});
