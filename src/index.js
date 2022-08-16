import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./typography.css";
import App from "./App";
import { AppProvider } from "./../src/utils/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import Nav from "./components/Nav";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="country/:name" element={<Country />} />
          <Route path="*" element="<p>Theres nothing here....</p>" />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
