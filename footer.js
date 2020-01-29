import React, { Component } from "react";


class Footer extends Component {
    render() {
        return (
            <footer className="page-footer">


                <div className="container text-center text-md-left">

                    <div className="row">
                        <div className="col-md-4 mx-auto">
                            <img className="img3" src={require("./images/logo_globe.svg")} />

                        </div>

                        <hr className="clearfix w-100 d-md-none"></hr>


                        <div className="col-md-2 mx-auto">

                            <h5 className="heading-bold mt-3">General</h5>

                            <ul className="list-unstyled">

                                <li>
                                    <a className="link-bold" href="#">Sign Up</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Help Center</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">About</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Press</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Blog</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#!">Careers</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Developers</a>
                                </li>
                            </ul>

                        </div>


                        <hr className="clearfix w-100 d-md-none"></hr>
                        <div className="col-md-2 mx-auto">

                            <h5 className="heading-bold  mt-3 ">Browse GCC</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a className="link-bold" href="#">Learning</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Jobs</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Salary</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Mobile</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">ProFinder</a>
                                </li>
                            </ul>

                        </div>


                        <hr className="clearfix w-80 d-md-none"></hr>

                        <div className="col-md-2 mx-auto">


                            <h5 className="heading-bold mt-3">Business solutions</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a className="link-bold" href="#">Talent</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Marketing</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Learning</a>
                                </li>

                            </ul>

                        </div>
                        <hr className="clearfix w-100 d-md-none"></hr>

                        <div className="col-md-2 mx-auto">


                            <h5 className="heading-bold  mt-3">Directories</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a className="link-bold" href="#">Members</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Jobs</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Companies</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Salaries</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#">Featured</a>
                                </li>
                                <li>
                                    <a className="link-bold" href="#!">Learning</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                </div>
                <div className="footer-list">
                    <ul className="list">
                        <span className="li-item-text">©2019</span>
                        <li className="li-item"><a href="#">About</a></li>
                        <li className="li-item"><a href="#">User Agreement</a></li>
                        <li className="li-item"><a href="#">Privacy Policy</a></li>
                        <li className="li-item"><a href="#">Cookie Policy</a></li>
                        <li className="li-item"><a href="#">Privacy Policy</a></li>
                        <li className="li-item"><a href="#">Brand Policy</a></li>
                        <li className="li-item"><a href="#">Guest Controls</a></li>
                        <li className="li-item"><a href="#">Community Controls</a></li>

                        <li className="li-item">
                            <div className="dropdown">
                                <button className="btn  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Language
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">Hindi</a>
                                    <a className="dropdown-item" href="#">English</a>
                                    <a className="dropdown-item" href="#">Spanish</a>
                                </div>
                            </div></li>


                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;