import {describe, expect} from 'vitest';
import {makeFakeCamera, makeFakeStore} from '../../utils/mocks.ts';
import {NameSpace} from '../../const.ts';
import {
  selectFilterCategory,
  selectFilterDown, selectFilteredCameras,
  selectFilterLevel,
  selectFilterType,
  selectFilterUp
} from './selectors.ts';

describe('FilterProcess Selectors', () => {
  const fakeCameras = [makeFakeCamera()];
  const state = makeFakeStore({
    [NameSpace.FILTERS]: {
      filterCategory: 'test',
      filterType: ['test'],
      filterLevel: ['test'],
      filterPriceUp: '111',
      filterPriceDown: '11',
      filteredCameras: fakeCameras
    }});

  it('should return filter category from state', () => {
    const {filterCategory} = state.FILTERS;
    const result = selectFilterCategory(state);

    expect(result).toEqual(filterCategory);

  });

  it('should return filter type from state', () => {
    const {filterType} = state.FILTERS;
    const result = selectFilterType(state);

    expect(result).toEqual(filterType);
  });

  it('should return filter level from state', () => {
    const {filterLevel} = state.FILTERS;
    const result = selectFilterLevel(state);

    expect(result).toEqual(filterLevel);
  });

  it('should render filter priceDown', () => {
    const {filterPriceDown} = state.FILTERS;
    const result = selectFilterDown(state);

    expect(result).toEqual(filterPriceDown);
  });

  it('should render filter priceUp', () => {
    const {filterPriceUp} = state.FILTERS;
    const result = selectFilterUp(state);

    expect(result).toEqual(filterPriceUp);
  });

  it('should return filtered cameras', () => {
    const {filteredCameras} = state.FILTERS;
    const result = selectFilteredCameras(state);

    expect(result).toEqual(filteredCameras);
  });
});
