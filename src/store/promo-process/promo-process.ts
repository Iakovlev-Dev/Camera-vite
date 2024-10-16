import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {fetchPromo} from '../api-actions.ts';
import {TPromoArray} from '../../types/type-promo.ts';

type TInitialStatePromo = {
  promo: TPromoArray;
}

const initialState: TInitialStatePromo = {
  promo: []
};

export const promoProcess = createSlice({
  name: NameSpace.PROMO,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.promo = action.payload;
      });
  }
});
