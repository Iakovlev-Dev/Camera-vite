import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectFilterCategory = (state: TState) => state[NameSpace.FILTERS].filterCategory;
export const selectFilterType = (state: TState) => state[NameSpace.FILTERS].filterType;
export const selectFilterLevel = (state: TState) => state[NameSpace.FILTERS].filterLevel;
export const selectFilterUp = (state: TState) => state[NameSpace.FILTERS].filterPriceUp;
export const selectFilterDown = (state: TState) => state[NameSpace.FILTERS].filterPriceDown;
export const selectFilteredCameras = (state: TState) => state[NameSpace.FILTERS].filteredCameras;
