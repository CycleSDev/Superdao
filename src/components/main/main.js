import React from "react";
import { GetStarted } from "./GetStarted/GetStarted";
import { ReadyProject } from "./ReadyProject/readyProject";
import { Slider } from "./Slider/Slider";
import { WorkWith } from "./WorkWith/WorkWith";
import { HelpStep } from "./HelpStep/HelpStep";
import { EmailInput } from "./EmailInput/EmailInput";

export const Main = () => {

    return (
        <>
         <GetStarted />
         <ReadyProject />
         <Slider />
         <WorkWith />
         <HelpStep />
         <EmailInput />
        </>
    )
}