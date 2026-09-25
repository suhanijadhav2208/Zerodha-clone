import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Home from "./components/Home";
import Orders from "./components/Orders";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
       <Route path="/orders" element={<Orders />}/>

        <Route path="*" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);