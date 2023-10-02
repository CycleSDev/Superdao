import React from "react";
import { GetStarted } from "./GetStarted/GetStarted";
import { ReadyProject } from "./ReadyProject/readyProject";
import { Slider } from "./Slider/Slider";
import { WorkWith } from "./WorkWith/WorkWith";

export const Main = () => {
    return (
        <main>
         <GetStarted />
         <ReadyProject />
         <Slider />
         <WorkWith />
        </main>
    )
}