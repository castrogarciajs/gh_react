import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./context/Context";
import App from "./App";
import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
