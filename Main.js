import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Signup from "./signup";
import Gcc from "./Contact";
import Join from "./Join";
import Footer from "./footer";
import Signin from "./signin"
import User from "./user";
import HomeUser from "./home_User";

import Header from "./header";
import Message from "./messaging.js"
import Chatbox from "./chatBox.js"
 import VerticalLinearStepper from "./experience"
 import Notification from "./notification"


class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          
        {/*<ul className="header">
          <li><NavLink to="/"></NavLink></li>
            <li><NavLink to="/signin"><button type="button" className="btn btn-outline-danger" id="btn">Sign In</button></NavLink></li>
            <li><NavLink to="/contact">Why Gcc</NavLink></li>
    <li><NavLink to="/Join">Join</NavLink></li>
    <li><NavLink to="/user">Profile</NavLink></li>
    </ul>*/}
          <div className="content">
          <Route path="/" exact={true} component={Home}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/contact" component={Gcc}/>
            <Route path="/Join" component={Join}/>
            <Route path="/user" component={User}/>
            <Route path="/home_User" component={HomeUser}/>
            <Route path="/messaging" component={Message}></Route>
            <Route path="/header" component={Header}/>
            <Route path="/chatBox" component={Chatbox}/>
            <Route path="/experience" component={VerticalLinearStepper}/>
            <Route path="/" exact={true}  component={Footer}/>
            <Route path="/notification" component={Notification}/>
            {/*<Route path="/messageBoard" component={Chat}/>*/}
          </div>
        </div>
      </HashRouter>
    
    );
  }
}
 
export default Main;