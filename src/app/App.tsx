import {Box, Button, Container, Stack, Typography} from '@mui/material';
import React, { useState } from 'react';
import '../css/App.css';
import '../css/navbar.css'; 
import '../css/footer.css';  
import { RippleBadge } from './MaterialTheme/styled';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/users";
import Dishes from './components/dishes';
import { RestaurantPage } from './screens/RestaurantPage';
import { OrderPage } from './screens/OrderPage';
import { ShopPage } from './screens/ShopPage';
import { CommunityPage } from './screens/CommunityPage';
import { HelpPage } from './screens/HelpPage';
import { ContactusPage,  } from './screens/ContactusPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { NavbarOthers } from './components/header/others';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarHome } from './components/header';
import { Footer } from './components/footer';
import { MemberPage } from './screens/MemberPage';




function App() {    
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
 return (
    <Router>
  {/* { main_path =="/" ? (
        <NavbarHome setPath={setPath}/>
      ): main_path.includes("/restaurant") ? (
        <NavbarRestaurant/> 
  )
       : (
        <NavbarOthers setPath={setPath}/>
  )} */}

{main_path == '/' ? (
  <NavbarHome setPath={setPath} />
) : main_path.includes("/restaurant") ? (
  <NavbarRestaurant /> 
) : (
  <NavbarOthers setPath={setPath} />
)}

<Switch>
      <Route path="/Restaurant">
          <RestaurantPage />
        </Route>
       
        <Route path="/shops">
          <ShopPage />
        </Route>
        <Route path="/Order">
          <OrderPage />
        </Route>
       
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/Community">
          <CommunityPage />
        </Route>
        <Route path="/member">
          <MemberPage />
        </Route>
        <Route path="/Contact Us">
          <ContactusPage />
        </Route>
        <Route path="/KIRISH">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>

<Footer/>


  </Router>
  );
}




export default App;



