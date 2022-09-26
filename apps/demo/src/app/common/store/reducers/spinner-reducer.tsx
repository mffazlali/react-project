import { spinnerInitialState, SpinnerState } from "../states/spinner-state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const setSpinners = (state: SpinnerState, action: PayloadAction<boolean>) => {
  state.stateMode = action.payload;
};

export const spinnerReducer = createSlice({
  name: "spinner",
  initialState: spinnerInitialState,
  reducers: {
    changeSpinners: setSpinners
  }
});

export const changeSpinnersAsync = (mode: boolean) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(changeSpinners(mode));
  }, 3000);
};

export const { changeSpinners } = spinnerReducer.actions;

export default spinnerReducer.reducer;
