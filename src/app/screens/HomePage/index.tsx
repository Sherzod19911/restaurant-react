import { Container } from "@mui/material";
import React from "react";
import { SpecialMenu } from "./specialMenu";
import { TodaysMenu } from "./todaysMenu";


import { CustomersComments } from "./customersComment";
import { Events } from "./events";
import { Advertisiments } from "./advertisiment";
import { Menu } from "./menu";
import { Masters } from "./masters";
import { Swiper } from "./swiper";
import { Footer } from "../../components/footer";


export function HomePage() {
    return (
    <div className="homepage">
        <SpecialMenu/>
        <TodaysMenu/>
        <Menu/>
        <Advertisiments/>
     
        <CustomersComments/>
        <Masters/>
        <Swiper/>
        <Events/>
         </div>
    )
}   