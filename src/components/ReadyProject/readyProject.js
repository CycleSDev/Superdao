import React from "react";
import "./readyProject.scss";
import ReadyImg from './ReadyImg.jpg';
import HeaderSvg from './HeaderSvg.svg';
import StarMore from './StarMore.svg';
import StarList from './StarList.svg';

export function ReadyProject() {
    return (
            <div className="ReadyProjectBlock">
             <div id="ReadyProjectHeader">
              <img src={HeaderSvg}></img>
              <h2>Ready for every project</h2>
             </div>
             <div id="ReadyProjectDAO">
             <div>
              <div><p style={{ color: "#FFB4D3" }}>Investment DAO</p></div>
              <div><p style={{ color: "#FFC24C" }}>Startup DAO</p></div>
              <div><p style={{ color: "#D387F7" }}>Service DAO</p></div>
              <div><p style={{ color: "#77E6FF" }}>Community DAO</p></div>
             </div>
             <div>
               <div><p style={{ color: "#23C9DE" }}>Impact DAO</p></div>
               <div><p style={{ color: "#FF9E9E" }}>DeFi DAO</p></div>
               <div>
                <img src={StarMore}></img>
                <p style={{ color: "#707F8D", fontWeight: 700, marginLeft: 8 }}>More</p>
               </div>
             </div>
             </div>
             <div id="ReadyProjectMain">
              <img src={ReadyImg}></img>
              <div><p>1000+ projects launched on Superdao</p></div>
             </div>
             <div id="ReadyProjectList">
              <img src={StarList}></img>
              <h3>Designed for the full journey</h3>
              <h3>Organisation design</h3>
              <h3>Smart contract development</h3>
              <h3>Fundraising</h3>
              <h3>Launch marketing</h3>
              <h3>Member onboarding</h3>
              <h3>Contributor management</h3>
              <h3>DAO operations</h3>
             </div>
            </div>
    )
}