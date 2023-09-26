require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/header";
import "./App.scss";
import { GetStarted } from "./components/GetStarted/GetStarted";

const root = createRoot(document.getElementById("app"));

root.render(
  <>
    <Header />
    <GetStarted />
  </>
);
