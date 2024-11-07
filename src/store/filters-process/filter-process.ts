import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {TCameraArray} from '../../types/type-cards.ts';


type TInitialStateFilters = {
  filterCategory: string;
  filterType: string[];
  filterLevel: string[];
  filterPriceUp: string;
  filterPriceDown: string;
  filteredCameras: TCameraArray;
}

const initialState: TInitialStateFilters = {
  filterCategory: '',
  filterType: [],
  filterLevel: [],
  filterPriceUp: '',
  filterPriceDown: '',
  filteredCameras: []
};

export const filterProcess = createSlice({
  name: NameSpace.FILTERS,
  initialState,
  reducers: {
    setFilterCategory: (state, action: PayloadAction<string>) => {
      state.filterCategory = action.payload;
    },
    setFilterType: (state, action: PayloadAction<string[]>) => {
      state.filterType = action.payload;
    },
    setFilterLevel: (state, action: PayloadAction<string[]>) => {
      state.filterLevel = action.payload;
    },
    setFilterPriceUp: (state, action: PayloadAction<string>) => {
      state.filterPriceUp = action.payload;
    },
    setFilterPriceDown: (state, action: PayloadAction<string>) => {
      state.filterPriceDown = action.payload;
    },
    setFilteredCameras: (state, action: PayloadAction<TCameraArray>) => {
      state.filteredCameras = action.payload;
    }
  }
});

export const {
  setFilterCategory,
  setFilterType,
  setFilterLevel,
  setFilterPriceUp,
  setFilterPriceDown,
  setFilteredCameras
} = filterProcess.actions;
