import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
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

const response = await axios.get(
  "https://api.petfinder.com/v2/animals?type=cat",
  {
    headers: {
      Authorization: `Bearer ${token.data.access_token}`,
    },
  }
);
console.log(response);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<ErrorView />}>
//       <Route index loader={ListViewData} element={<ListView />} />
//       <Route
//         path="/details/:id"
//         loader={DetailsViewData}
//         element={<DetailsView />}
//       />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
