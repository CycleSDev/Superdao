import React from "react";
import Images from "./importImages.js"
import "./WorkWith.scss";

export const WorkWith = () => {
  return (
    <div className="Works">
      <div className="Works__h2">
        <div id="Circle"></div>
        <h2>Works with</h2>
        <div>
         <img src={Images.WorksStar}></img>
        </div>
      </div>
      <div className="Works__List">
        <div className="Works__List-item">
          <div>
            <img src={Images.Ethereum}></img>
          </div>
          <p>Ethereum</p>
        </div>
        <div className="Works__List-item">
          <div>
            <img src={Images.Polygon}></img>
          </div>
          <p>Polygon</p>
        </div>
        <div className="Works__List-item">
          <div>
            <img src={Images.GnosisSafe}></img>
          </div>
          <p>Gnosis Safe</p>
        </div>
        <div className="Works__List-item">
          <div>
            <img src={Images.Snapshot}></img>
          </div>
          <p>Snapshot</p>
        </div>
        <div className="Works__List-item">
          <div>
            <img src={Images.ENS}></img>
          </div>
          <p>ENS</p>
        </div>
        <div className="Works__List-item">
          <div>
            <img src={Images.OpenSea}></img>
          </div>
          <p>OpenSea</p>
        </div>
      </div>
    </div>
  );
};
