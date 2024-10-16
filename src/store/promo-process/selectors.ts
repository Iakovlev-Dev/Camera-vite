import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectPromo = (state: TState) => state[NameSpace.PROMO].promo;
