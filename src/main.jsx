import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home/home.jsx";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <link
      href="https://fonts.googleapis.com/css2?family=Judson:ital,wght@0,400;0,700;1,400&display=swap"
      rel="stylesheet"
    ></link>
    <Home />
  </React.StrictMode>,
);
