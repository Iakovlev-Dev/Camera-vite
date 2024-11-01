import {describe, expect} from 'vitest';
import {setSortInner, setSortOrder, sortingProcess} from './sorting-process.ts';

describe('SortingProcess Slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      sortOrder: '',
      sortInner: ''
    };

    const result = sortingProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with undefined state and empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      sortOrder: 'По возрастанию',
      sortInner: 'по цене'
    };

    const result = sortingProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set sortOrder with setSortOrder action', () => {
    const expectedState = {
      sortOrder: 'По убыванию',
      sortInner: 'по цене'
    };

    const result = sortingProcess.reducer(undefined, setSortOrder('По убыванию'));

    expect(result).toEqual(expectedState);
  });

  it('should set sortInner with setSortInner action', () => {
    const expectedState = {
      sortOrder: 'По возрастанию',
      sortInner: 'по популярности'
    };

    const result = sortingProcess.reducer(undefined, setSortInner('по популярности'));

    expect(result).toEqual(expectedState);
  });
});
