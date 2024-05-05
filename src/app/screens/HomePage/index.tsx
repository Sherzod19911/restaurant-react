import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { SpecialMenu } from "./specialMenu";
import { CustomersComments } from "./customersComment";
import { Advertisiments } from "./advertisiment";
import { Menu } from "./menu";
import { Masters } from "./masters";
import { Footer } from "../../components/footer";
import { Services } from "./Services";

import { useDispatch, useSelector} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import {setTodaysMenus, bestBoarticles, } from "../../screens/HomePage/slice"

import { Restaurant } from "../../../types/user";
import { Route, Switch,  useRouteMatch   } from "react-router-dom";
import { TopRestaurant } from "./todaysMenus";

//REDUX SLICE
const actionDispatch = (dispach: Dispatch) => ({
    setTodaysMenus: (data: Restaurant[]) => dispach(setTodaysMenus(data)),
  });
//REDUX SELECTOR
const todaysMenusRetriever = createSelector(
    setTodaysMenus,
    (TodaysMenu) => ({
      TodaysMenu,
    })
  );



export function HomePage() {

  //INITIALIZATION
const { setTodaysMenus } = actionDispatch(useDispatch());
const { TodaysMenu} = useSelector(todaysMenusRetriever);
//selector: store => data
  useEffect (() => {
    
    // setTodaysMenus([]);

}, []);
    return (
    <div className="homepage">
        <TopRestaurant/>
        <Menu/>
        <SpecialMenu/>
        <Advertisiments/>
        <CustomersComments/>
        <Masters/>
        <Services/>
         </div>
    )
}   