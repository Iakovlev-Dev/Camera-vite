import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectSortInner = (state: TState) => state[NameSpace.SORTING].sortInner;
export const selectSortOrder = (state: TState) => state[NameSpace.SORTING].sortOrder;
