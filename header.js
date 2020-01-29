import React, { Component } from "react";
import "./header.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dropdown from "./dropdown";

class Header extends React.Component {
    render() {
        return (

            <div>
                <nav className="navbar navbar-expand-sm  navbar-light" id="nav-home">

                    <a className="navbar-brand" href="#"><img className="logo-profile" src={require("./images/logo.svg")} /></a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2 search-profile" type="text" placeholder="Search" />

                    </form>


                    <ul className="navbar-nav">
                        <li className="nav-item nav1" id="nav-main">
                            <li className="nav-link nav2"><Link to="/home_User"> <span className="icons"><i class='fas fa-home'></i></span>Home</Link></li>
                        </li>
                        <li className="nav-item nav1" id="nav-main">
                            <li className="nav-link nav2"><Link to="/signup"> <span className="icons"><i class='fas fa-users'></i></span>Connections</Link></li>
                        </li>
                        <li className="nav-item nav1" id="nav-main">
                            <li className="nav-link nav2"><Link to="/signup"> <span className="icons"><i class='fas fa-user-tie'></i></span>Jobs</Link></li>
                        </li>
                        <li className="nav-item nav1" id="nav-main">
                            <li className="nav-link nav2"><Link to="/signup"> <span className="icons"><i class='fas fa-plus-square'></i></span>More</Link></li>
                        </li>

                    </ul>
                    {/*<Dropdown />*/}
                    <div className="popups">
                        <button className="pop-btn"> <span className="icons2"><i class="fas fa-bell"></i></span></button>
                        <button className="pop-btn"><span className="icons2"><i class="fas fa-comments"></i></span></button>
                        <button className="pop-btn"><span className="icons2"><Dropdown /></span></button>



                    </div>
                </nav>

            </div>

        );
    }


}

export default Header;