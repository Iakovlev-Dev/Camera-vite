import {createSlice, PayloadAction, Slice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {postOrder} from '../api-actions.ts';


type TInitialStateBasketProcess = {
  camerasIdBasket: number[];
  isDeleteCamera: boolean;
  deleteIdCamera: number | null;
  orderAmount: number;
  isOrderPostSuccess: boolean;
  isLoading: boolean;
  isErrorBasket: boolean;
}

const initialState: TInitialStateBasketProcess = {
  camerasIdBasket: [],
  isDeleteCamera: false,
  deleteIdCamera: null,
  orderAmount: 0,
  isOrderPostSuccess: false,
  isLoading: false,
  isErrorBasket: false,
};

export const basketProcess: Slice<TInitialStateBasketProcess> = createSlice({
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
    setIsErrorPostBasket: (state, action: PayloadAction<boolean>) => {
      state.isErrorBasket = action.payload;
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
        state.isLoading = false;
      });
  }
});

export const {
  setCamerasBasket,
  setIsDeleteCamera,
  setDeleteIdCamera,
  setOrderPostSuccess,
  setSumOrder,
  setIsErrorPostBasket,
} = basketProcess.actions;
