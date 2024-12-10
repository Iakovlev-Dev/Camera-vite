import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';


type initialState = {
  camerasIdBasket: number[];
  isDeleteCamera: boolean;
  deleteIdCamera: number | null
}

const initialState: initialState = {
  camerasIdBasket: [],
  isDeleteCamera: false,
  deleteIdCamera: null,
};

export const basketProcess = createSlice({
  name: NameSpace.BASKET,
  initialState,
  reducers: {
    setCamerasBasket: (state, action: PayloadAction<number[]>) => {
      state.camerasIdBasket = action.payload;
    },
    setIsDeleteCamera: (state, action: PayloadAction<boolean>) => {
      state.isDeleteCamera = action.payload;
    },
    setDeleteIdCamera: (state, action: PayloadAction<number>) => {
      state.deleteIdCamera = action.payload;
    }
  }
});

export const {
  setCamerasBasket,
  setIsDeleteCamera,
  setDeleteIdCamera
} = basketProcess.actions;
