import React from "react";
import Logo from "./importIogo.js";
import "./Backed.scss";

export const Backed = () => {
  return (
    <div className="BackedCompany">
      <div className="BackedCompany__h2">
        <h2>Backed by</h2>
        <div>
          <img src={Logo.BackedStar}></img>
        </div>
      </div>
      
        {/* <img src={Logo.Alliance}></img>
        <img src={Logo.Circle}></img>
        <img src={Logo.Digital}></img>
        <img src={Logo.Fifty}></img>
        <img src={Logo.Fika}></img>
        <img src={Logo.GreatOAKS}></img>

        <img src={Logo.Norwest}></img>
        <img src={Logo.OneBlock}></img>
        <img src={Logo.Pear}></img>
        <img src={Logo.Protocol}></img>
        <img src={Logo.Shima}></img>
        <img src={Logo.Vs}></img> */}
    </div>
  );
};
