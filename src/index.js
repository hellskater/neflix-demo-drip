import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import WalletContext from "./context/WalletContextProvider";
import { MantineProvider } from "@mantine/core";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WalletContext>
      <MantineProvider>
        <App />
      </MantineProvider>
    </WalletContext>
  </React.StrictMode>
);
