import {describe, expect} from 'vitest';
import {NameSpace, SortingInner, SortingOrder} from '../../const.ts';
import {makeFakeStore} from '../../utils/mocks.ts';
import {selectSortInner, selectSortOrder} from './selectors.ts';

describe('SortingProcess Selectors', () => {
  const state = makeFakeStore(
    {
      [NameSpace.SORTING]: {
        sortOrder: SortingOrder.sortPrice,
        sortInner: SortingInner.sortUp
      }
    });

  it('should return sortOrder from state', () => {
    const {sortOrder} = state.SORTING;
    const result = selectSortOrder(state);

    expect(result).toEqual(sortOrder);
  });

  it('should return sortInner from state', () => {
    const { sortInner } = state.SORTING;
    const result = selectSortInner(state);

    expect(result).toEqual(sortInner);
  });
});
