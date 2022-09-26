import { PayloadAction } from "@reduxjs/toolkit";
import { SpinnerState } from "../states/spinner-state";

  export const setSpinner =(state: SpinnerState, action: PayloadAction<boolean>) => {
    state.stateMode = action.payload;
  }
