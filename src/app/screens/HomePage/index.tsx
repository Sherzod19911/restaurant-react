import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { SpecialMenu } from "./specialMenu";
import { TodaysMenus } from "./todaysMenu";
import { CustomersComments } from "./customersComment";
import { Advertisiments } from "./advertisiment";
import { Menu } from "./menu";
import { Masters } from "./masters";
import { Footer } from "../../components/footer";
import { Services } from "./Services";


export function HomePage() {
  useEffect (() => {
    

}, []);
    return (
    <div className="homepage">
          <TodaysMenus/>
          <Menu/>
        <SpecialMenu/>
        <Advertisiments/>
        <CustomersComments/>
        <Masters/>
       <Services/>
         </div>
    )
}   