import React from "react";
import ArrowSvg from "./Arrow.svg";
import "./StartedBlock.scss";

export const StartedBlock = () => {
  return (
    <div className="GetStarted">
      <h1>
        The easiest way
        <br />
        to start a DAO
      </h1>
      <p>
        An all-in-one platform to start, manage and grow
        <br />a decentralized autonomous organization
      </p>
      <button>Get started</button>
      <img src={ArrowSvg}></img>
      <div id="Circle"></div>
    </div>
  );
};
