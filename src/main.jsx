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
import axios from "axios";

const token = await axios.post(
  `https://api.petfinder.com/v2/oauth2/token`,
  `grant_type=client_credentials&client_id=${
    import.meta.env.VITE_API_KEY
  }&client_secret=${import.meta.env.VITE_SECRET_KEY}`,
  {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  }
);

export const response = await axios.get(
  "https://api.petfinder.com/v2/animals?type=cat",
  {
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  }
);
console.log(response.data.animals);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorView />}>
      <Route index element={<IndexView />} />
      <Route path="/list" element={<ListView />} />
      <Route path="/details" element={<DetailsView />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
