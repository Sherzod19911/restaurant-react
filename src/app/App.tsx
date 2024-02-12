import {Box, Button, Container, Stack, Typography} from '@mui/material';
import React from 'react';
import '../css/App.css';
import { RippleBadge } from './MaterialTheme/styled';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Users from "./components/users";
import Dishes from './components/dishes';
import { RestaurantPage } from './screens/RestaurantPage';
import { PagePage } from './screens/PagePage';
import { ShopPage } from './screens/ShopPage';
import { BlogPage } from './screens/BlogPage';
import { HelpPage } from './screens/HelpPage';
import { ContactusPage,  } from './screens/ContactusPage';
import { LoginPage } from './screens/LoginPage';
import { HomePage } from './screens/HomePage';


function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>


          <Link to="/restaurant">RestaurantPage</Link>
          </li>
          <li>
            <Link to="/pages">PagePage</Link>
          </li>
          <li>
            <Link to="/shops">ShopPage</Link>
          </li>
          <li>
            <Link to="/blog">BlogPage</Link>
          </li>
          <li>
            <Link to="/help">HelpPage</Link>
          </li>
          <li>
          <Link to="/Contact us">ContactusPage</Link>
           </li>
          <li>
          <Link to="/login">LoginPage</Link>
           </li>
          <li>
          <Link to="/">Homepage</Link>

          </li>
          </ul>
      </nav>
      <Switch>
      <Route path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route path="/pages">
          <PagePage />
        </Route>
        <Route path="/shops">
          <ShopPage />
        </Route>
        <Route path="/blog">
          <BlogPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/Contact us">
          <ContactusPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <HomePage/>
        </Route>
      </Switch>
    </div>
  </Router>
  )
}

function Home() {
  return <h2>Home</h2>;
}


export default App;
