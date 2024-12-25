import {describe, expect} from 'vitest';
import {
  basketProcess,
  setCamerasBasket,
  setDeleteIdCamera,
  setIsDeleteCamera, setIsErrorPostBasket,
  setOrderPostSuccess,
  setSumOrder
} from './basket-process.ts';
import {postOrder} from '../api-actions.ts';
import {TOrder} from '../../types/type-order.ts';

describe('BasketProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with empty state', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set camerasIdBasket with setCamerasBasket', () => {
    const expectedState = {
      camerasIdBasket: [1, 2, 3, 4, 5],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(
      undefined, setCamerasBasket([1, 2, 3, 4, 5]),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set camerasIdBasket with setIsDeleteCamera', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: true,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(
      undefined, setIsDeleteCamera(true),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set camerasIdBasket with setDeleteIdCamera', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: 4,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(
      undefined, setDeleteIdCamera(4),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set camerasIdBasket with setSumOrder', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 400,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(
      undefined, setSumOrder(400),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set camerasIdBasket with setOrderPostSuccess', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: true,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(
      undefined, setOrderPostSuccess(true),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set camerasIdBasket with setIsLoading', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: true,
    };

    const result = basketProcess.reducer(
      undefined, setIsErrorPostBasket(true),
    );

    expect(result).toEqual(expectedState);
  });

  const fakeOrder: TOrder = {
    camerasIds: [1, 2, 3, 4, 5],
    coupon: null
  };

  it('should set isLoading with postOrder.pending', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: true,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(
      undefined, postOrder.pending('', fakeOrder, undefined),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set isOrderPostSuccess with postOrder.fulfilled', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: true,
      isLoading: false,
      isErrorBasket: false,
    };

    const result = basketProcess.reducer(
      undefined, postOrder.fulfilled(undefined, '', fakeOrder),
    );

    expect(result).toEqual(expectedState);
  });

  it('should set isErrorBasket with postOrder.rejected', () => {
    const expectedState = {
      camerasIdBasket: [],
      isDeleteCamera: false,
      deleteIdCamera: null,
      orderAmount: 0,
      isOrderPostSuccess: false,
      isLoading: false,
      isErrorBasket: true,
    };

    const result = basketProcess.reducer(
      undefined, postOrder.rejected(null, '', fakeOrder),
    );

    expect(result).toEqual(expectedState);
  });
});


