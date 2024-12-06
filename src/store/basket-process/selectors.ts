import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectCamerasIdBasket = (state: TState) => state[NameSpace.BASKET].camerasIdBasket;
