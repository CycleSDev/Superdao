import React from "react";
import { StartedBlock } from "./StartedBlock/StartedBlock";
import { ProjectList } from "./ProjectList/ProjectList";
import { Slider } from "./Slider/Slider";
import { WorkWith } from "./WorkWith/WorkWith";
import { HelpStep } from "./HelpStep/HelpStep";
import { Email } from "./Email/Email";
import { Backed } from "./Backed/Backed";

export const Main = () => {

    return (
        <>
         <StartedBlock />
         <ProjectList />
         <Slider />
         <WorkWith />
         <HelpStep />
         <Email />
         <Backed />
        </>
    )
}