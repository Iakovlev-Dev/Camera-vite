import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';


type initialState = {
  camerasIdBasket: number[];
  isDeleteCamera: boolean;
  deleteIdCamera: number | null;
  orderAmount: number;
}

const initialState: initialState = {
  camerasIdBasket: [],
  isDeleteCamera: false,
  deleteIdCamera: null,
  orderAmount: 0,
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
    },
    setSumOrder: (state, action: PayloadAction<number>) => {
      state.orderAmount = action.payload;
    }
  }
});

export const {
  setCamerasBasket,
  setIsDeleteCamera,
  setDeleteIdCamera,
  setSumOrder
} = basketProcess.actions;
