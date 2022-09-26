export interface ModalState {
  stateMode: boolean;
  title?: string;
  message?: string;
}

export const spinnersInitialState: ModalState = {
  stateMode: false,
  title: "",
  message: ""
};
