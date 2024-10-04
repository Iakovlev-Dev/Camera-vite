import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectCameras = (state: TState) => state[NameSpace.DATA_CARDS].cameras;
