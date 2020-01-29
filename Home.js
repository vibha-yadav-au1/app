import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./index.css";

class Home extends Component {
    render() {
        return (
            <div>
                <ul className="header">

                    {/*<li><a className="wg" Link to ="/">Why GCC</a></li>
                    <li><a className="join" Link to ="/Join">Join</a></li>*/}
                    <li><Link to="/">Why GCC</Link></li>
                    <li><Link to="/signup">Join</Link></li>
                    <li><Link to="/signin"><button type="button" class="btn btn-outline-danger">Sign in</button></Link></li>



                </ul>




                <div className="section2">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-4">
                                <img className="logo2" src={require("./images/logo2.svg")} />
                            </div>
                            <div className="col-8">
                                <img className="img-main" src={require("./images/Homescreen.png")} />

                            </div>
                        </div>


                    </div>

                    {/*<img src="/Homescreen.png" alt="Homescreen"></img><div className="border"></div>*/}
                </div>
                <div className="section3">
                    <div className="container-fluid">

                        <h1 className="gc_tag heading1"> Who is GCC for?</h1>
                        <h3 className="heading2">Anyone looking to navigate</h3>
                        <h3 className="heading3"> their professional life</h3>
                        <button className="button" ><span>Find a job</span></button>



                    </div>

                </div>
                <div className="section4">
                    <img className="img2" src={require("./images/Homescreen2.png")} />

                    <h2 className="heading4">FOR CHARTERED</h2>
                    <h2 className="heading5-p">PROFESSIONALS</h2>
                    <h2 className="heading4-blue">Grow With Us!</h2>


                    {/*<h2 className="heading6">FOR EMPLOYERS</h2>
<p className="heading-corporate">Build Your Dream Job</p>

<img className="img-fluid img-cor" src={require("./images/Corporates.png")} />
<img className="img-fluid" src={require("./images/Students.png")} />*/}
                </div>
                <div className="section5">
                    <img className="img-cor" src={require("./images/Corporates.png")} />
                    <h2 className="heading6">FOR EMPLOYERS</h2>
                    <h2 className="heading7">Build Your Dream Job</h2>
                    <img className="img-student" src={require("./images/Students.png")} />
                    <h2 className="heading8">FOR STUDENTS</h2>
                    <h2 className="heading9">Engage, Learn 	& Grow</h2>
                </div>

                <div className="main5">
                    <div className="container">
                        <h2 className="heading5">Top Listed Companies</h2>
                    </div>
                </div>

                <div className="main6">
                    <div className="img123">

                        <img className="img_logo" src={require("./images/ey_logo.png")} />

                    </div>
                    <div className="img123">
                        <img className="img_logo" src={require("./images/kp_logo.png")} />
                    </div>
                    <div className="img123">
                        <img className="img_logo" src={require("./images/pwc_logo.png")} />
                    </div>
                    <div className="img123">
                        <img className="img_logo" src={require("./images/del_Logo.png")} />
                    </div>
                    <div className="img123">
                        <img className="img_logo" src={require("./images/sc_logo.png")} />
                    </div>
                    <div className="img123">
                        <img className="img_logo" src={require("./images/gt_logo.jpg")} />
                    </div>
                </div>
                <div className="main7">
                    <img className="img_purple" src={require("./images/back_ground.png")} />
                    <div className="centered">
                        <h2 className="gc_tag">Go Confidently</h2>
                        <h5 className="mid">in the direction of your dreams</h5>
                        <h2 className="gc_tag">GCC</h2>
                    </div>
                </div>
                <div className="main8">
                    <img className="img_main8" src={require("./images/main8.png")} />
                    <div className="top-right"><h2 className="gc_tag">Go Confidently</h2>
                        <h3 className="gc_tag2">in the direction of your dreams</h3>
                        <h2 className="gc_tag">GCC</h2>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;