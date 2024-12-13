import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {postOrder} from '../api-actions.ts';


type initialState = {
  camerasIdBasket: number[];
  isDeleteCamera: boolean;
  deleteIdCamera: number | null;
  orderAmount: number;
  isOrderPostSuccess: boolean;
  isLoading: boolean;
  isErrorBasket: boolean;
}

const initialState: initialState = {
  camerasIdBasket: [],
  isDeleteCamera: false,
  deleteIdCamera: null,
  orderAmount: 0,
  isOrderPostSuccess: false,
  isLoading: false,
  isErrorBasket: false,
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
    },
    setOrderPostSuccess: (state, action: PayloadAction<boolean>) => {
      state.isOrderPostSuccess = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  },
  extraReducers (builder) {
    builder
      .addCase(postOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postOrder.fulfilled, (state) => {
        state.isLoading = false;
        state.camerasIdBasket = [];
      })
      .addCase(postOrder.rejected, (state) => {
        state.isErrorBasket = true;
      });
  }
});

export const {
  setCamerasBasket,
  setIsDeleteCamera,
  setDeleteIdCamera,
  setOrderPostSuccess,
  setSumOrder,
  setIsLoading
} = basketProcess.actions;
