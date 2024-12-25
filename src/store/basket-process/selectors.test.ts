import {describe, expect} from 'vitest';
import {makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {selectCameras} from '../data-card-process/selectors.ts';
import {
  selectDeleteIdCamera,
  selectIsDeletingCamera, selectIsErrorPostBasket,
  selectIsLoading,
  selectIsOrderPostSuccess,
  selectSumOrder
} from './selectors.ts';

describe('BasketProcess selectors', () => {
  const fakeStore = makeFakeStore({
    [NameSpace.BASKET]: {
      camerasIdBasket: [1],
      isDeleteCamera: false,
      deleteIdCamera: 1,
      orderAmount: 400,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: false,
    }
  });

  it('should return camerasIdBasket', () => {
    const {camerasIdBasket} = fakeStore.BASKET;
    const result = selectCameras(fakeStore);

    expect(camerasIdBasket).toEqual(result);
  });

  it('should return isDeleteCamera', () => {
    const {isDeleteCamera} = fakeStore.BASKET;
    const result = selectIsDeletingCamera(fakeStore);

    expect(isDeleteCamera).toEqual(result);
  });

  it('should return deleteIdCamera', () => {
    const {deleteIdCamera} = fakeStore.BASKET;
    const result = selectDeleteIdCamera(fakeStore);

    expect(deleteIdCamera).toEqual(result);
  });

  it('should return orderAmount', () => {
    const {orderAmount} = fakeStore.BASKET;
    const result = selectSumOrder(fakeStore);

    expect(orderAmount).toEqual(result);
  });

  it('should return isOrderPostSuccess', () => {
    const {isOrderPostSuccess} = fakeStore.BASKET;
    const result = selectIsOrderPostSuccess(fakeStore);

    expect(isOrderPostSuccess).toEqual(result);
  });

  it('should return isLoading', () => {
    const {isLoading} = fakeStore.BASKET;
    const result = selectIsLoading(fakeStore);

    expect(isLoading).toEqual(result);
  });

  it('should return isErrorBasket', () => {
    const {isErrorBasket} = fakeStore.BASKET;
    const result = selectIsErrorPostBasket(fakeStore);

    expect(isErrorBasket).toEqual(result);
  });
});
