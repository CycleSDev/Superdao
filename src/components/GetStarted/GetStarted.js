import React from "react";
import "./GetStarted.scss";

export function GetStarted() {
    return (
            <div className="MainGetStarted">
            <h1>The easiest way<br />to start a DAO</h1>
            <p>An all-in-one platform to start, manage and grow<br />a decentralized autonomous organization</p>
            <button>Get started</button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
            <path opacity="0.6" d="M2 1.5L12 10L22.5 1.5" stroke="#425870" stroke-width="2.5" stroke-linecap="round"/>
            <path d="M2 14L12 22.5L22.5 14" stroke="#425870" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
            <div id="Circle"></div>
            </div>
    )
}