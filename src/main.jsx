import React from "react";
import ReactDOM from "react-dom/client";
import {
  createRoutesFromElements,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import IndexView from "./pages/index";
import ErrorView from "./pages/error";
import DetailsView from "./pages/details";
import ListView from "./pages/list";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<IndexView />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/details/:id" element={<DetailsView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
