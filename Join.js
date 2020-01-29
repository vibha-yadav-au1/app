import React, { Component } from "react";

class Join extends Component {
  msg = () => {
    alert("Hello, how you doing?");
    /*
    The 'this' keyword refers to the component object
    */
  }
  render() {
    return (
      <div>
        <div className="container-fluid custom-background">
          <img className="logo-sign" src={require("./images/logo2.svg")} />
          {/*<img src="/images/logo2.svg"></img>*/}
          <div className='row custom-row'>
            <div className="col-md-4"></div>
            <div className='col-md-4'>
              {/* <div class="circlebaharwala">
                    <div className="circle2"><div className="circle1"></div></div>
    </div>
              <svg  class= "circle1" width="100" height="100">
                <circle cx="50" cy="100" r="40"
                  stroke="black" stroke-width="5" fill="gray"  />
    </svg>*/}
              
              <div id="layout1">


                <form onSubmit={this.handlesubmit} className='form-style'>
                <div class="form-group">
                    <label>First Name</label>
                    <input type="text" class="form-control" placeholder="First name"/>
                </div>
                <div class="form-group">
                    <label>Last Name</label>
                    <input type="text" class="form-control" placeholder="Last name"/>
                </div>

                  <div class="form-group">
                    <label>Email or Phone</label>
                    <input onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  </div>
                  <div class="form-group">
                    <label>Password (6 or more characters)</label>
                    <input onChange={this.handlePass} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <p className="text-sign">By clicking Agree & Join, you agree to the LinkedIn User Agreement,
                    Privacy Policy, and Cookie Policy.
                        </p>
                  <button onClick={this.msg} type="submit" class="btn-color">Agree & Join</button>

                </form>
                <br></br>
                

              </div>
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
                                    <a className="dropdown-item" href="">Hindi</a>
                                    <a className="dropdown-item" href="">English</a>
                                    <a className="dropdown-item" href="#">Spanish</a>
                                </div>
                            </div></li>


                    </ul>
                </div>
      </div>
      
    );
  }
}

export default Join;