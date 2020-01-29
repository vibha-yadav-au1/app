import React, { Component } from "react";
import "./user.css";
//import "./images/Contactme.svg" ;

import { Link } from "react-router-dom";
import Signup from "./signup";
import Dashboard from "./Dashboard.js"
import Header from "./header";

class User extends Component {
    shoot(a) {
        alert(a);
    }
    render() {
        return (
            <div>


                <div className="nav">
                    <img className="logo-profile" src={require("./images/logo.svg")} />
                    {/*<div className="input-container">
                        <span className="icon"><i class="fas fa-search"></i></span>
                        <input type="text" placeholder="Search.."></input>
                        
        </div>
                    


                    <ul className="user-header-item">

                        <li className="li-item-user"><Link to="/signup"> <span className="icons"><i class='fas fa-home'></i></span>Home</Link></li>
                        <li className="li-item-user"><Link to="/signup"> <span className="icons"><i class='fas fa-users'></i></span>Connections</Link></li>
                        <li className="li-item-user"><Link to="/signup"> <span className="icons"><i class="fas fa-user-tie"></i></span>Jobs </Link></li>
                        <li className="li-item-user"><Link to="/signup"> <span className="icons"><i class="far fa-plus-square"></i></span>More</Link></li>

                        <li className="li-item-user">
                            <span classname="popup">
                                <ul>
                                    <li className="pop-item"><span className="icons2"><i class="fas fa-bell"></i></span></li>
                                    <li className="pop-item"><span className="icons2"><i class="fas fa-comments"></i></span></li>
                                    <li className="pop-item"><span className="icons2">
                                        <i class='fas fa-user'></i></span></li>
                                </ul>
                            </span>

                        </li>
        </ul>*/}
                    <Header />
                </div>
                <div classname="container">
                    <div className="section-cover">
                        <img className="" id="cover" src={require("./images/Homescreen.png")}></img>
                    </div>


                </div>
                <div></div>


                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <div className="card-group">
                                <div className="card1">
                                    <img className="card-img-top" id="dummy" src={require("./images/dummy.png")}></img>

                                    <div className="card-body1">
                                        <h6 className="card-title">Looking for a job?</h6>
                                        <div className="custom-control custom-switch">
                                            <input type="checkbox" class="custom-control-input" id="customSwitch1"></input>
                                            <label className="custom-control-label" for="customSwitch1"></label>
                                        </div>
                                        <p className="card-text1"></p>
                                    </div>
                                </div>

                            </div>
                            <div className="card-group">
                           
                                    <div className="card-body2">
                                        <h3 className="card-title2">Main Menu</h3>
                                        <button class="button-user"><button class="btn"><i className="fa fa-address-card"></i></button>
                                            <Link to="/">My Dashboard</Link></button>
                                        <button class="button-user"><button class="btn"><i class="fa fa-home"></i></button>
                                            <Link to="/">About Me</Link></button>
                                        <button class="button-user"><button class="btn"><i class="fa fa-home"></i></button>
                                            <Link to="/">My Education</Link></button>
                                        <button class="button-user"><button class="btn"><i class="fa fa-home"></i></button>
                                            <Link to="/">My Sklills</Link></button>
                                        <button class="button-user"><button class="btn"><i class="fa fa-home"></i></button>
                                            <Link to="/">My Experience</Link></button>
                                        <button class="button-user"><button class="btn"><i class="fa fa-home"></i></button>
                                            <Link to="/">Add Section</Link></button>

                                    </div>
                                </div>
                        </div>
                        <div className="col-6">
                            <div className="main-user1">
                                <div className="container1">
                                    <h3>Johny Vino</h3>
                                    <p className="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                fringilla mi. Nulla id risus tortor. Pellentesque justo mi, maximus et
                                finibus vitae, dictum eu metus. Cras vel blandit diam. Praesent eu euismod
                                eros. </p>
                                </div>
                                <div className="container2">

                                    <div className="button-user1">
                                        <button className="con">Contact Me</button>
                                        <img className="" src={require("./images/Contactme.svg")}></img></div>
                                    <div className="button-user1">
                                        <button className="sp-btn">Share Profile</button>
                                        <img className="" src={require("./images/ShareProfile.svg")}></img></div>

                                </div>
                            </div>
                            <div className="sec-user">
                                <div className="Ps"><span className="Ps-item1">Profile Strength : </span>
                                    <span className="Ps-item2">INTERMEDIATE</span>
                                </div>
                                <div className="progress" id="progress1">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div><br></br>
                                <div className="progress" id="progress2">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>

                            {/* <div className="main-user">
                                <div className="main-heading-user"><h2>Johny Vino</h2> 
                                <span className="Contact-buttons"><button className="button-user1"><button class="btn"></button>
                                            Contact Me</button></span><span className="Share-buttons"> <button className="button-user2"><button class="btn"></button>
                                            Share Profile</button></span></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                fringilla mi. Nulla id risus tortor. Pellentesque justo mi, maximus et
                                finibus vitae, dictum eu metus. Cras vel blandit diam. Praesent eu euismod
                                eros. Proin pretium feugiat neque, 
                </p>
                                
                            

        </div>
                            <div className="button-section"></div>
                            <div className="sec-user">
                                <div className="Ps"><span className="Ps-item1">Profile Strength : </span>
                                    <span className="Ps-item2">INTERMEDIATE</span>
                                </div>
                                <div className="progress" id="progress1">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div><br></br>
                                <div className="progress" id ="progress2">
                                    <div className="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                
        </div>*/}

                            <div className="sec-user1">
                                <Dashboard />
                            </div>
                            <div className="sec-user2">
                                <div className="edit">
                                    <h5 className="About">About Me</h5>
                                    <div className="progress" id="progress1">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>

                                    </div>

                                    <img className="edit-img" src={require("./images/Edit.svg")}></img>
                                    <button className="edit-btn">Edit</button>

                                </div>
                                <div className="sec">
                                    <div className="sec1">
                                        <img className="profile-img" src={require("./images/dummy.png")}></img>
                                    </div>
                                    <div className="sec2">
                                        <h4>Hello,</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                        fringilla mi. Nulla id risus tortor. Pellentesque justo mi, maximus et
                                        finibus vitae,</p>
                                        <br></br>
                                        <div className="about-sec-row">
                                            <div className="abt-column1">
                                                <span className="about-sec-item1">Name : </span>
                                                <span className="about-sec-item2">Vibha</span>
                                            </div>
                                            <div className="abt-column2">
                                                <span className="about-sec-item1">Location : </span>
                                                <span className="about-sec-item2">Varanasi</span>
                                            </div>
                                        </div>
                                        <div className="about-sec-row">
                                            <div className="abt-column1">
                                                <span className="about-sec-item1">Birthday : </span>
                                                <span className="about-sec-item2">17 April 1994</span>
                                            </div>
                                            <div className="abt-column2">
                                                <span className="about-sec-item1">Email : </span>
                                                <span className="about-sec-item2">vyadav477@gmail.com</span>
                                            </div>
                                        </div>
                                        <div className="btn-download">
                                            <img className="d-img" src={require("./images/DownloadCV.svg")}></img>
                                            <img className="Hm-img" src={require("./images/HireMe.svg")}></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sec-user3">
                                <div className="edit">
                                    <h5 className="About">My Skills</h5>
                                    <div className="progress" id="progress1">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>

                                    <img className="edit-img" src={require("./images/Edit.svg")}></img>
                                    <p className="skill-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                        fringilla mi. Nulla id risus tortor. Pellentesque justo mi.Nulla
                                        id risus tortor.</p>

                                    <div className="skill-sec-row">
                                        <div className="skill-column1">
                                            <span className="skill-sec-item1"><b>WORDPRESS</b> </span>
                                            <div className="skill-sec-item2">
                                                <div className="progress-skill">
                                                    <div className="progress-bar-skill" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="skill-column2">
                                            <span className="skill-sec-item1"><b>HTML & CSS</b></span>
                                            <div className="skill-sec-item2">
                                                <div className="progress-skill">
                                                    <div className="progress-bar-skill" role="progressbar" aria-valuenow="25"
                                                        aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-sec-row">
                                        <div className="skill-column1">
                                            <span className="about-sec-item1"><b>J Query</b> </span>
                                            <div className="skill-sec-item2"> <div className="progress-skill">
                                                <div className="progress-bar-skill" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div></div>
                                        </div>
                                        <div className="skill-column2">
                                            <span className="skill-sec-item1"><b>Sketch</b></span>
                                            <div className="skill-sec-item2"> <div className="progress-skill">
                                                <div className="progress-bar-skill" role="progressbar" aria-valuenow="25"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sec-user4">
                                <div className="edit">
                                    <h5 className="About"> Experience</h5>
                                    <div className="progress" id="progress1">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>

                                <img className="edit-img" src={require("./images/Edit.svg")}></img>
                                <div className="Exp">
                                    <div className="Exp-left">
                                        <div className="Exp-left-item1">2019-Present</div>
                                        <div className="Exp-left-item2">2018-2015</div>
                                        <div className="Exp-left-item2">2015-2012</div>

                                    </div>
                                    <div className="Exp-right">
                                        <div className="Exp-right-item1"><strong>Art Director - Facebook Inc</strong>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                        fringilla mi.</p>
                                        </div>
                                        <div className="Exp-right-item2"><strong>Senior Designer - LinkedIn</strong>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                            fringilla mi.</p>
                                        </div>
                                        <div className="Exp-right-item3"><strong>Junior Designer - Google </strong>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                            fringilla mi.</p>
                                        </div>
                                    </div>
                                </div>



                                {/*<div className="vertical">
                                                hello
                                    </div>
                                    <div className="vertical">hello</div>
    <div className="vertical">hello</div>*/}
                            </div>
                            <div className="sec-user5">
                                <div className="edit">
                                    <h5 className="About">Education </h5>
                                    <div className="progress" id="progress1">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <img className="edit-img" src={require("./images/Edit.svg")}></img>
                                    <div className="Exp">
                                        <div className="Exp-left">
                                            <div className="Exp-left-item1">2019-Present</div>
                                            <div className="Exp-left-item2">2018-2015</div>
                                            <div className="Exp-left-item2">2015-2012</div>

                                        </div>
                                        <div className="Exp-right">
                                            <div className="Exp-right-item1"><strong>Art Director - Facebook Inc</strong>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                        fringilla mi.</p>
                                            </div>
                                            <div className="Exp-right-item2"><strong>Senior Designer - LinkedIn</strong>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                            fringilla mi.</p>
                                            </div>
                                            <div className="Exp-right-item3"><strong>Junior Designer - Google </strong>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec
                                            fringilla mi.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <br></br>

                        </div>
                        <div className="col">
                            <div className="box-user1"></div>
                            <div className="box-user2">
                                <h4 className="box-user2-heading">
                                    RECOMMENDATIONS
                                </h4>
                            </div>
                            <div className="box-user3">
                                <h4 className="box-user2-heading">
                                    OPPORTUNITIES
                                </h4>
                            </div>
                            <div className="box-user4">
                                <h4 className="box-user2-heading">
                                    COMPANIES SUGGESTIONS
                                </h4></div>
                            <div className="box-user5">
                                <footer>
                                    <ul className="footer-link">
                                        <div className="row-foot1">
                                            <div className="col-foot1"></div>
                                            <div className="col-foot2"></div>
                                        </div>

                                        <div className="row-foot2">
                                            <div className="col-foot1"></div>
                                            <div className="col-foot2"></div>
                                        </div>

                                        <li className="footer-link-item"><span className="footer-user"><Link to="/">About</Link></span></li>
                                        <li className="footer-link-item"><span className="footer-user"><Link to="/">Help Centre</Link></span></li>
                                        <li className="footer-link-item"><span className="footer-user"><Link to="/">Privacy & Terms</Link></span></li>
                                        <li className="footer-link-item"><span className="footer-user"><Link to="/">Advertising</Link></span></li>
                                        <li className="footer-link-item"><span className="footer-user"><Link to="/">Business Services</Link></span></li>
                                        <li className="footer-link-item"><a>More</a></li>
                                    </ul>
                                </footer>
                            </div>
                        </div>
                    </div>

                </div>
            </div>










            //<div className="main">
            //<div class="container-fluid">

            //</div>
            //</div>




        );
    }
}
export default User;