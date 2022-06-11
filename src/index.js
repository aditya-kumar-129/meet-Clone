import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./context/context";
import { FirebaseContext } from "./context/firebase";
import {data} from './lib/firebase'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <FirebaseContext.Provider value={{ data }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FirebaseContext.Provider>
  </ContextProvider>
);
