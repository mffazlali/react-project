import { createAction, PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "../states/modal-state";

export const close = (state: ModalState)=> {
  state.stateMode = false;
};

export const show = (state: ModalState, action: PayloadAction<{title:string,message:string}>) => {
  console.log('a',action.payload)
  state.stateMode = true;
  state.title = action.payload.title;
  state.message = action.payload.message;
};

