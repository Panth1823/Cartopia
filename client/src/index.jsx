import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.scss";
import { Analytics } from "@vercel/analytics/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
