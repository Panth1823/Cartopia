import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SpeedInsights } from "@vercel/speed-insights/react";
import "./index.css";
import { Analytics } from "@vercel/analytics/react";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
);
