import { spinnersInitialState, ModalState } from "../states/modal-state";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { close, show } from "../actions/modal-action";

export const modalReducer = createSlice({
  name: "modal",
  initialState: spinnersInitialState,
  reducers: {
    showModal: show,
    closeModal: close
  }
});

export const { showModal, closeModal } = modalReducer.actions;

export default modalReducer.reducer;
