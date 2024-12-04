import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';


type initialState = {
  camerasIdBasket: number[];
}

const initialState: initialState = {
  camerasIdBasket: []
};

export const basketProcess = createSlice({
  name: NameSpace.BASKET,
  initialState,
  reducers: {
    setCamerasBasket: ((state, action: PayloadAction<number[]>) => {
      state.camerasIdBasket = action.payload;
    })
  }
});

export const {setCamerasBasket} = basketProcess.actions;
