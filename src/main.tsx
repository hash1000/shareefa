import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/global.css";
import "react-datepicker/dist/react-datepicker.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
