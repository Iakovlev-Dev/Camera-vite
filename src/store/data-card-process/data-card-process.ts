import {createSlice} from '@reduxjs/toolkit';
import {TCameraCard} from '../../types/type-cards.ts';
import {NameSpace} from '../../const.ts';
import {fetchCameraCardAction, fetchCameraCardsAction} from '../api-actions.ts';

export type TInitialStateDataCard = {
  cameras: TCameraCard [];
  camera: TCameraCard | null;
  isLoading: boolean;
}

const initialState: TInitialStateDataCard = {
  cameras: [],
  camera: null,
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
      })
      .addCase(fetchCameraCardsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCameraCardsAction.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchCameraCardAction.fulfilled, (state, action) => {
        state.camera = action.payload;
      });
  }
});
