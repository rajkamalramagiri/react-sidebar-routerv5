import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import { AiFillHome, AiFillAppstore, AiFillCloud, AiFillMail } from 'react-icons/ai';


import Home from './Home'
import Bubblegum from './Bubblegum';
import Email from './Email'
import About from './About';
import './App.css'

export default function SidebarExample() {
  return (
    <Router>
      <div className="container">
        <div className="sidebar">
          <ul>
            <NavLink exact to="/" activeClassName="selected"
            >
              <li>
                <AiFillHome />
                <span>Home</span>
              </li>
            </NavLink>
            <NavLink to="/about" activeClassName="selected">
              <li>
                <AiFillAppstore />
                <span>About</span>
              </li>
            </NavLink>
            <NavLink activeClassName="selected" to="/bubblegum">
              <li>
                <AiFillCloud />
                <span>Bubblegum</span>
              </li>
            </NavLink>
            <NavLink activeClassName="selected" to="/email">
              <li>
                <AiFillMail />
                <span>Email</span>
              </li>
            </NavLink>
          </ul>
        </div>

        <div>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/bubblegum" component={Bubblegum} />
            <Route path="/email" component={Email} />
            <Route exact path="/" component={Home} />
            <Redirect exact from="*" to="/" />
          </Switch>

        </div>
      </div>
    </Router>
  );
}
