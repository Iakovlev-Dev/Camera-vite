import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';


type TInitialStateFilters = {
  filterCategory: string;
  filterType: string;
  filterLevel: string;
  filterPriceUp: string;
  filterPriceDown: string;
}

const initialState: TInitialStateFilters = {
  filterCategory: '',
  filterType: '',
  filterLevel: '',
  filterPriceUp: '',
  filterPriceDown: ''
};

export const filterProcess = createSlice({
  name: NameSpace.FILTERS,
  initialState,
  reducers: {
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload;
    },
    setFilterType: (state, action: PayloadAction<string>) => {
      state.filterType = action.payload;
    },
    setFilterLevel: (state, action: PayloadAction<string>) => {
      state.filterLevel = action.payload;
    },
    setFilterPriceUp: (state, action: PayloadAction<string>) => {
      state.filterPriceUp = action.payload;
    },
    setFilterPriceDown: (state, action: PayloadAction<string>) => {
      state.filterPriceDown = action.payload;
    }
  }
});

export const {
  setFilterCategory,
  setFilterType,
  setFilterLevel,
  setFilterPriceUp,
  setFilterPriceDown
} = filterProcess.actions;
