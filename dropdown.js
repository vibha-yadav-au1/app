import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import './dropdown.css';


class Dropdown extends React.Component {
    constructor() {
        super();

        this.state = {
            displayMenu: false,
        };

        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };

    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }

    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });

    }

    render() {
        return (
            <div className="dropdown" style={{ background: "gray", width: "0px" }} >
                <div className="" onClick={this.showDropdownMenu}> <i class="fas fa-user"></i></div>

                {this.state.displayMenu ? (
                    <ul className="dropdown-list">
                        <li className="dropdown-item" id="drop1"><Link to="/" className="active" href="#Create Page">Manage</Link></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none',  }} to="/" >My Posts </Link><span className="icons2"><i class="fas fa-address-card"></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none', color: "" }} to="/" >Bookmarks</Link><span className="icons2"><i class="far fa-bookmark"></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none',  }} to="/" >Ads</Link><span className="icons2"><i class="far fa-ad"></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none', }}  to="/" >Pages</Link><span className="icons2"><i class="far fa-file"></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none', }} to="/" >Groups</Link><span className="icons2"><i class="fal fa-users"></i></span></li>
                        <li className="dropdown-item" id="drop1" style={{borderbottom:'1px solid gray'}}><Link  style={{ textDecoration: 'none', }}to="/" >ACCOUNT</Link><span className="icons2"><i class="far fa-user-circle"></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none', }}  to="/" >SETTING & PRIVACY</Link><span className="icons2"><i class='fas fa-comments'></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none', }} to="/" >LANGUAGES</Link><span className="icons2"><i class='fas fa-comments'></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}}><Link style={{ textDecoration: 'none', }} to="/" >Manage Pages</Link><span className="icons2"><i class='fas fa-comments'></i></span></li>
                        <li className="dropdown-item" style={{borderbottom:'1px solid gray'}} id="drop2"><Link style={{ textDecoration: 'none', }}  to="/" >SIGN OUT</Link><span className="icons2"><i class="fas fa-power-off"></i></span></li>
                    </ul>
                ) :
                    (
                        null
                    )
                }

            </div>

        );
    }
}

export default Dropdown;
