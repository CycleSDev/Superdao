import React from "react";
import { GetStarted } from "./GetStarted/GetStarted";
import { ReadyProject } from "./ReadyProject/readyProject";
import { Slider } from "./Slider/Slider";

export const Main = () => {
    return (
        <>
        <GetStarted />
        <ReadyProject />
        <Slider />
        </>
    )
}