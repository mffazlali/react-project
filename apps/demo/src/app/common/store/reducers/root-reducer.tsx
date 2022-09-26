import { combineReducers } from "redux";

import userReducer from "./user-reducer";
import spinnersReducer from "./spinner-reducer";
import modalReducer from "./modal-reducer";

const rootReducer = combineReducers({ modal: modalReducer, spinner: spinnersReducer, user: userReducer });

export default rootReducer;
