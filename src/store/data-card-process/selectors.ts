import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectCameras = (state: TState) => state[NameSpace.DATA_CARDS].cameras;
export const selectCamera = (state: TState) => state[NameSpace.DATA_CARDS].camera;
export const selectSimilarCameras = (state: TState) => state[NameSpace.DATA_CARDS].similarCameras;
export const selectCurrentPage = (state: TState) => state[NameSpace.DATA_CARDS].currentPage;
