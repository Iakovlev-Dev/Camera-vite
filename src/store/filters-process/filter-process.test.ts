import {describe, expect} from 'vitest';
import {
  filterProcess,
  setFilterCategory, setFilteredCameras,
  setFilterLevel,
  setFilterPriceDown,
  setFilterPriceUp,
  setFilterType
} from './filter-process.ts';
import {makeFakeCamera} from '../../utils/mocks.ts';

describe('FilterProcess slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      filterCategory: '',
      filterType: [],
      filterLevel: [],
      filterPriceUp: '',
      filterPriceDown: '',
      filteredCameras: []
    };

    const result = filterProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return initial state with undefined state and empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      filterCategory: '',
      filterType: [],
      filterLevel: [],
      filterPriceUp: '',
      filterPriceDown: '',
      filteredCameras: []
    };

    const result = filterProcess.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "filterCategory" with setFilterCategory', () => {
    const expectedState = {
      filterCategory: 'Фотоаппарат',
      filterType: [],
      filterLevel: [],
      filterPriceUp: '',
      filterPriceDown: '',
      filteredCameras: []
    };

    const result = filterProcess.reducer(
      undefined, setFilterCategory('Фотоаппарат')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "filterType" with setFilterType', () => {
    const expectedState = {
      filterCategory: '',
      filterType: ['Моментальная'],
      filterLevel: [],
      filterPriceUp: '',
      filterPriceDown: '',
      filteredCameras: []
    };

    const result = filterProcess.reducer(
      undefined, setFilterType(['Моментальная'])
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "filterLevel" with setFilterLevel', () => {
    const expectedState = {
      filterCategory: '',
      filterType: [],
      filterLevel: ['Начальный'],
      filterPriceUp: '',
      filterPriceDown: '',
      filteredCameras: []
    };

    const result = filterProcess.reducer(
      undefined, setFilterLevel(['Начальный'])
    );

    expect(expectedState).toEqual(result);
  });

  it('should set "filterPriceUp" with setFilterPriceUp', () => {
    const expectedState = {
      filterCategory: '',
      filterType: [],
      filterLevel: [],
      filterPriceUp: '1111',
      filterPriceDown: '',
      filteredCameras: []
    };

    const result = filterProcess.reducer(
      undefined, setFilterPriceUp('1111')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "filterPriceDown" with setFilterPriceDown', () => {
    const expectedState = {
      filterCategory: '',
      filterType: [],
      filterLevel: [],
      filterPriceUp: '',
      filterPriceDown: '1111',
      filteredCameras: []
    };

    const result = filterProcess.reducer(
      undefined, setFilterPriceDown('1111')
    );

    expect(result).toEqual(expectedState);
  });

  it('should set "filteredCameras" with setFilteredCameras', () => {
    const fakeCameras = [makeFakeCamera()];
    const expectedState = {
      filterCategory: '',
      filterType: [],
      filterLevel: [],
      filterPriceUp: '',
      filterPriceDown: '',
      filteredCameras: fakeCameras
    };

    const result = filterProcess.reducer(
      undefined, setFilteredCameras(fakeCameras)
    );

    expect(result).toEqual(expectedState);
  });
});
