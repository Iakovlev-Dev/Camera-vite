import {createSlice} from '@reduxjs/toolkit';
import {TCameraCard} from '../../types/type-cards.ts';
import {NameSpace} from '../../const.ts';
import {fetchCameraCardsAction} from '../api-actions.ts';

export type TInitialStateDataCard = {
  cameras: TCameraCard [];
  isLoading: boolean;
}

const initialState: TInitialStateDataCard = {
  cameras: [],
  isLoading: false,
};

export const dataCardProcess = createSlice({
  name: NameSpace.DATA_CARDS,
  initialState,
  reducers: {},
  extraReducers (builder) {
    builder
      .addCase(fetchCameraCardsAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
        state.isLoading = false;
      });
  }
});
