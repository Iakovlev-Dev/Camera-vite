import {describe, expect} from 'vitest';
import {makeFakePromo} from '../../utils/mocks.ts';
import {promoProcess} from './promo-process.ts';
import {fetchPromo} from '../api-actions.ts';

describe('PromoProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      promo: []
    };

    const result = promoProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with undefined state and empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      promo: []
    };

    const result = promoProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "promo" with fetchPromo.fulfilled', () => {
    const fakePromo = makeFakePromo();
    const expectedState = {
      promo: [fakePromo],
    };

    const result = promoProcess.reducer(
      undefined, fetchPromo.fulfilled([fakePromo], '', undefined)
    );

    expect(result).toEqual(expectedState);
  });
});
