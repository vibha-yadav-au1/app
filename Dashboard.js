import React from 'react';
import Header from './header';
import './dashboard.css';
import { Link } from 'react-router-dom'
class Dashboard extends React.Component {
    constructor(){
        super();
        this.state = {
            color: "red",
            
        };

    }
    changeSetting=() =>{
        this.setState({color:"blue"});
    }
    render() {

        return (
            <div>

                <div className="container-fluid">
                <div className="container pt-3"></div>
                    <p className="Dashboard"><b>My Dashboard</b></p>
                </div>
            <div><i className="fas fa-globe"></i><p>Private to you</p></div>
            <div className="container" id="dash">
                <div className="row">
                    <div className="col-2">
                        <span className="numbers">60</span><br></br>
                        <span className="words">Number of connections</span>
                    </div>
                    <span className="border-right"></span>
                    <div className="col-2">
                        <span className="numbers">60</span><br></br>
                        <span className="words">Number of profile viewed</span>
                    </div>
                    <span className="border-right"></span>
                    <div className="col-2">
                        <span className="numbers">60</span><br></br>
                        <span className="words">Number of Posts</span>
                    </div>
                    <span className="border-right"></span>

                    <div className="col-2">
                        <span className="numbers">60</span><br></br>
                        <span className="words">Post viewed</span>
                    </div>
                    <div className="col-2">
                        <span className="numbers">60</span><br></br>
                        <span className="words">Search Appearance</span>
                    </div>
                </div>
                <div className="row"><div className="box-dash-2">

                    <span className="icon-dash"><i class="fas fa-globe"></i></span>
                    <span ><b>salary insights</b></span>
                    <p className="salary">See how your salary compares to other in the community</p></div>

                </div>
                <div className="row"><div className="box-dash-3">
                    <span className= "icon-dash"><i class="fas fa-globe"></i><b>Pages</b></span>
                    <br></br>
                    <br></br>
                    <div className="row">
                        <div class="col-3">
                            <span><b>Page title</b></span></div>
                        <div class="col-3"><p>60</p>
                            <p>Followers</p>
                        </div>
                        <div class="col-3"><span>20/01/2020</span>
                            <p>Last Updated</p>
                        </div>
                        <div class="col-3">
                            <button className="manage-btn" onClick={this.changeSetting} component={Link} to="/settings">
                                <img className="edit-img" src={require("./images/Edit.svg")}></img>
                            </button>

                        </div>
                    </div>
                </div></div>

            </div>
            </div >

        );
    }
}

export default Dashboard;