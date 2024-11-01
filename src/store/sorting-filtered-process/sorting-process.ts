import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, SortingInner, SortingOrder} from '../../const.ts';

type TInitialState = {
  sortInner: string;
  sortOrder: string;
}

const initialState: TInitialState = {
  sortInner: SortingInner.sortPrice,
  sortOrder: SortingOrder.up
};

export const sortingProcess = createSlice({
  name: NameSpace.SORTING,
  initialState,
  reducers: {
    setSortInner: (state, action: PayloadAction<string>) => {
      state.sortInner = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<string>) => {
      state.sortOrder = action.payload;
    }
  }
});

export const {setSortInner, setSortOrder} = sortingProcess.actions;
