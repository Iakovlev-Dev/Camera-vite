import {describe, expect} from 'vitest';
import {makeFakePromo, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {selectPromo} from './selectors.ts';

describe('PromoProcess Selectors', () => {
  const fakePromo = makeFakePromo();
  const state = makeFakeStore({
    [NameSpace.PROMO]: {
      promo: [fakePromo],
    }
  });

  it('should return promo from state', () => {
    const {promo} = state.PROMO;
    const result = selectPromo(state);

    expect(result).toEqual(promo);
  });
});
