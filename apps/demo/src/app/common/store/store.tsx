import { configureStore, createListenerMiddleware, Middleware } from "@reduxjs/toolkit";
import spinnersReducer from "./reducers/spinner-reducer";
import logger from "redux-logger";
import { batchedSubscribe } from "redux-batched-subscribe";
import _ from "lodash";
import rootReducer from "./reducers/root-reducer";

const debounceNotify = _.debounce(notify => notify());



export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  enhancers: [batchedSubscribe(debounceNotify)]
});

// setupListeners(store.dispatch)
// store.dispatch(userLoad2)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
