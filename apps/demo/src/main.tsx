import { StrictMode } from "react";
import * as ReactDOM from "react-dom/client";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/common/store/store";
import React from "react";
import ComponentSpinners from "./app/component/ui/spinners/componentSpinners/component.spinners";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Suspense fallback={<ComponentSpinners />}>
          <App />
        </React.Suspense>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
