import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Geiger } from "react-geiger";
import { inject } from '@vercel/analytics';

inject();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Geiger>
        <App />
      </Geiger>
    </BrowserRouter>
  </React.StrictMode>
);

AOS.init({
  offset: 0,
  duration: 1000,
});
