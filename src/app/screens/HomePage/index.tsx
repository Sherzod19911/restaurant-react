import { Container } from "@mui/material";
import React from "react";
import { SpecialMenu } from "./specialMenu";
import { TodaysMenu } from "./todaysMenu";
import { QualityServices } from "./qualityServices";
import { Menu } from "./menu";
import { Reservation } from "./reservation";
import { CustomersComments } from "./customersComment";
import { Events } from "./events";
import { Advertisiments } from "./advertisiment";


export function HomePage() {
    return (
    <div className="homepage">
        <SpecialMenu/>
        <TodaysMenu/>
        <QualityServices/>
        <Menu/>
        <Advertisiments/>
        <Reservation/>
        <CustomersComments/>
        <Events/>


    </div>
    )
}   