require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import "./App.scss";
import { createRoot } from "react-dom/client";
import { Header } from "./components/Header/header";
import { GetStarted } from "./components/GetStarted/GetStarted";
import { ReadyProject } from "./components/ReadyProject/readyProject";

const root = createRoot(document.getElementById("app"));

root.render(
  <>
    <Header />
    <GetStarted />
    <ReadyProject />
  </>
);
