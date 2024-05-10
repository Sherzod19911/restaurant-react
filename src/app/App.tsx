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
import { ContactPage } from './screens/ContactPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';
import { NavbarOthers } from './components/header/others';
import { NavbarRestaurant } from './components/header/restaurant';
import { NavbarHome } from './components/header';
import { Footer } from './components/footer';
import { MemberPage } from './screens/MemberPage';
import AuthenticationModal from './components/auth';





function App() { 
    /**INITIALIZATION */   
  const [path, setPath] = useState();
  const main_path = window.location.pathname;
  const [SignUpOpen, setSignUpOpen] = useState(false); // ekranda paydo bulmaydi avtomatik
  const[ loginOpen, setLoginOpen] = useState(false); // ekranda paydo bulmaydi avtomatik

  /**HANDLERS */
   const handleSignUpOpen = ()  =>  setSignUpOpen((true));    //  ruyxatdan utishni bossa true byulgani uchun ekranda chiqadi
   const handleSignUpClose = ()  =>  setSignUpOpen((false));
   const handleLoginOpen = ()  =>  setLoginOpen((true));  //  kirishni bossa true byulgani uchun ekranda chiqadi
   const handleLoginClose = ()  =>  setLoginOpen((false));

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
  <NavbarHome setPath={setPath}
  handleLoginOpen = {handleLoginOpen}
  handleSignUpOpen = {handleSignUpOpen}
  />
) : main_path.includes("/restaurant") ? (
  <NavbarRestaurant
        handleLoginOpen = {handleLoginOpen}
        handleSignUpOpen = {handleSignUpOpen}
        /> 
) : (
  <NavbarOthers setPath={setPath}
  handleLoginOpen = {handleLoginOpen}
  handleSignUpOpen = {handleSignUpOpen}
  />
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
          <ContactPage/>
        </Route>
        <Route path="/KIRISH">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>

<Footer/>
<AuthenticationModal
      loginOpen = {loginOpen}
       handleLoginOpen = {handleLoginOpen}
       handleLoginClose = {handleLoginClose}
       SignUpOpen = {SignUpOpen}
       handleSignUpOpen = {handleSignUpOpen}       
       handleSignUpClose = {handleSignUpClose}
     />

  </Router>
  );
}




export default App;



