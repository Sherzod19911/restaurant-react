import { Container } from "@mui/material";
import React from "react";
import { SpecialMenu } from "./specialMenu";
import { TodaysMenu } from "./todaysMenu";


import { CustomersComments } from "./customersComment";

import { Advertisiments } from "./advertisiment";
import { Menu } from "./menu";
import { Masters } from "./masters";
import { Footer } from "../../components/footer";
import { Services } from "./Services";


export function HomePage() {
    return (
    <div className="homepage">
        <SpecialMenu/>
        <TodaysMenu/>
        <Menu/>
        <Advertisiments/>
     
        <CustomersComments/>
        <Masters/>
       
        <Services/>
         </div>
    )
}   