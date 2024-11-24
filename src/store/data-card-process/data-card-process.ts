import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TCameraCard} from '../../types/type-cards.ts';
import {NameSpace} from '../../const.ts';
import {fetchCameraCardAction, fetchCameraCardsAction, fetchSimilarCameras} from '../api-actions.ts';

export type TInitialStateDataCard = {
  cameras: TCameraCard [];
  camera: TCameraCard | null;
  similarCameras: TCameraCard [];
  currentPage: number | null;
}

const initialState: TInitialStateDataCard = {
  cameras: [],
  camera: null,
  similarCameras: [],
  currentPage: null
};

export const dataCardProcess = createSlice({
  name: NameSpace.DATA_CARDS,
  initialState,
  reducers: {
    setCurrentPageSlice: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(fetchCameraCardsAction.fulfilled, (state, action) => {
        state.cameras = action.payload;
      })
      .addCase(fetchCameraCardAction.fulfilled, (state, action) => {
        state.camera = action.payload;
      })
      .addCase(fetchSimilarCameras.fulfilled, (state, action) => {
        state.similarCameras = action.payload;
      });
  }
});

export const {setCurrentPageSlice} = dataCardProcess.actions;
