import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectCamerasIdBasket = (state: TState) => state[NameSpace.BASKET].camerasIdBasket;
export const selectIsDeletingCamera = (state: TState) => state[NameSpace.BASKET].isDeleteCamera;
export const selectDeleteIdCamera = (state: TState) => state[NameSpace.BASKET].deleteIdCamera;
