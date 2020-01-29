import React, { Component } from "react";
import "./home_User.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Header from "./header";

class HomeUser extends React.Component {
    render() {
        return (
            <div>
                {/*<nav className="navbar navbar-expand-sm  navbar-light" id="nav-home">

                    <a className="navbar-brand" href="#">Logo</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2 search-profile" type="text" placeholder="Search" />

                    </form>


                    <ul className="navbar-nav">
                        <li className="nav-item nav1">
                            <li className="nav-link nav2"><Link to="/signup"> <span className="icons"><i class='fas fa-home'></i></span>Home</Link></li>
                        </li>
                        <li className="nav-item nav1">
                            <li className="nav-link nav2"><Link to="/signup"> <span className="icons"><i class='fas fa-users'></i></span>Connections</Link></li>
                        </li>
                        <li className="nav-item nav1">
                            <li className="nav-link nav2"><Link to="/signup"> <span className="icons"><i class='fas fa-user-tie'></i></span>Jobs</Link></li>
                        </li>
                        <li className="nav-item nav1">
                            <li className="nav-link nav2"><Link to="/signup"> <span className="icons"><i class='fas fa-plus-square'></i></span>More</Link></li>
                        </li>

                    </ul>
                    <div className="popup-item">

                        <li className="pop-item"><span className="icons2"><i class="fas fa-bell"></i></span></li>
                            <li className="pop-item"><span className="icons2"><i class="fas fa-comments"></i></span></li>
                            <li className="pop-item">
                                <button className="popup-item-btn"><span className="icons2">
                                    <i class='fas fa-user'></i> <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Separated link</a>
        </div></span></button>
                        <div className="dropdown" >

                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icons2"><i class='fas fa-bell'></i></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                                <Link to="/" className="dropdown-item drop" href="#">Action</Link>
                                <Link to="/" className="dropdown-item drop" href="#">Another action</Link>
                                <Link to="/" className="dropdown-item drop" href="#">Something else here</Link>
                            </div>
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icons2"><i class='fas fa-comments'></i></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a class="dropdown-item drop" href="#">Action</a>
                                <a class="dropdown-item drop" href="#">Another action</a>
                                <a class="dropdown-item drop" href="#">Something else here</a>
                            </div>
                            <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="icons2"><i class='fas fa-user'></i></span>
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <Link to="/" className="dropdown-item menu1">MANAGE</Link>
                                <Link to="/" className="dropdown-item menu1">MY POSTS</Link>
                                <Link to="/" className="dropdown-item drop">BOOKMARKS</Link>
                                <Link to="/" className="dropdown-item drop">Ads</Link>
                                <Link to="/" className="dropdown-item drop">PAGES</Link>
                                <Link to="/" className="dropdown-item drop">GROUPS</Link>
    </div>
                            <div>
                                <button>
                                    Show menu
        </button>

                                <div className="menu">
                                    <button> Menu item 1 </button>
                                    <button> Menu item 2 </button>
                                    <button> Menu item 3 </button>
                                </div>
                            </div>
                        </div>

                    </div>

        </nav>*/}
                <Header />

                <div className="container-fluid">
                    <div className="container pt-3"></div>
                    <div className="row">
                        <div className="col">

                            <div className="card1"><div className="profile-img"></div>
                                <h4 className="name">John Doe</h4>
                                <ul className="skill-list">
                                    <li className="skill-list-item"><i class='fas fa-user'></i>Website designer</li>
                                    <li className="skill-list-item"><i class='fas fa-user'></i>Skills</li>
                                    <li className="skill-list-item3"><i class='fas fa-location'></i>Location</li>
                                </ul>
                                <div className="card1-job"><h6 className="name">Looking for a job</h6></div>
                            </div>
                            <div className="card2">
                                <ul className="connection-list">
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Connections</Link></li>
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>My Post</Link></li>
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Jobs</Link></li>
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Bookmarks</Link></li>
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Messages</Link></li>
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Ads</Link></li>

                                </ul>
                            </div>
                            <div className="card3">
                                <ul className="connection-list">
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Pages</Link></li>
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Groups</Link></li>
                                    <li className="connection-list-item"><Link to="/signup"> <span className="icons-connections"><i class='fas fa-home'></i></span>Hashtags</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="container pt-3"></div>
                            <div className="profile-strength">
                                
                                <div className="Ps"><span className="Ps-item1">Profile Strength : </span>
                                    <span className="Ps-item2">INTERMEDIATE</span>
                                </div>
                                <div className="col-6">
                                    <div className="progress-title"></div>
                                    <div className="progress red">
                                        <div className="progress-bar  progress-bar-striped " style={{width:"65%"}}>
                                            <div className="progress-value">65%</div>
                                        </div>
                                    </div>
                                </div>            
                            </div>
                            <div className="invitations">
                                <div className="row1">
                                    <span className="in">Invitations</span>

                                    <span className="see"><Link to="/">See All</Link></span>
                                </div>
                                <div className="row2">
                                    <div></div>
                                    <div></div>
                                </div>  

                            </div>
                            {/*<button type="button" className="block">Create a Post</button>
                            
                            <button type="button" className="block" onClick={() => this.setState({ showModal: true })}>Add Work Log</button>
                            

                     
                            <Modal open={this.state.showModal}>...</Modal>*/}

                            <button type="button" className="block" data-toggle="modal" data-target="#exampleModalCenter">
                                Create a Post
                            </button>


                            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalCenterTitle">What do you want to talk about?</h5>
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <label>
                                                    Name:
                                                <input type="text" name="name" />
                                                </label>
                                                <input type="submit" value="Submit" />
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="post-feed"></div>
                        </div>
                        <div className="col">
                            <div className="box1"></div>
                            <div className="box2"></div>
                            <div className="box3"></div>
                        </div>
                    </div>
                </div>
            </div>




        );
    }
}

export default HomeUser;