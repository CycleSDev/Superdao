import React from "react";
import "./GetStarted.scss";
import ArrowSvg from './Arrow.svg';

export const GetStarted = () => {
    return (
            <div className="GetStarted">
            <h1>The easiest way<br />to start a DAO</h1>
            <p>An all-in-one platform to start, manage and grow<br />a decentralized autonomous organization</p>
            <button>Get started</button>
            <img src={ArrowSvg}></img>
            <div id="Circle"></div>
            </div>
    )
}