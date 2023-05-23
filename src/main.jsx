import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

var pf = new petfinder.Client({
  apiKey: `${import.meta.env.VITE_API_KEY}`,
  secret: `${import.meta.env.VITE_SECRET_KEY}`,
});

pf.animal
  .search()
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    // Handle the error
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
