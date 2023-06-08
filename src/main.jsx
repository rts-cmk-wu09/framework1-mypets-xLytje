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
import { response } from "./pages";
import ErrorView from "./pages/error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index loader={response} element={<IndexView />} />
      {/* <Route
        path="/details/:id"
        loader={DetailsViewData}
        element={<DetailsView />}
      /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
