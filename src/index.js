require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import "./App.scss";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/header";
import { Main } from "./components/main/main";

const root = createRoot(document.getElementById("app"));

root.render(
  <>
    <Header />
    <Main />
  </>
);
