import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { routes } from "./routes";

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className='mx-auto max-w-[1440px] min-w-[372px]'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);