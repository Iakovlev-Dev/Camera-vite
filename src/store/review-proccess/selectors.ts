import {TState} from '../../types/type-store.ts';
import {NameSpace} from '../../const.ts';

export const selectReviews = (state: TState) => state[NameSpace.REVIEWS].reviews;
