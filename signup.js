import React, { Component } from "react";
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./index.css";
class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      email: '',
      pass: '',
      data: {}
    }
    this.handleuserName = this.handleuserName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }

  handleuserName(event) {
    this.setState({
      userName: event.target.value
    })
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value
    })
  }

  handlePass(event) {
    this.setState({
      pass: event.target.value
    })
  }

  handlesubmit(event) {
    event.preventDefault();
    axios.post('', {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.pass
    })
      .then(response => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("userName", response.data.userName);

        } else {
          alert("username or password is incorrect");
        }
      }).catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="container" id= "new">
       
        <div class="row">
          <div class="col-6"><img className="img" src={require("./images/preview.png")} /></div>
          <div class="col-6">
            <div class="card">
              <div class="card-body">
                <form className='form-style'>
                  <h2 className="Welcome">Sign Up </h2>
                  <div className="input-container">
                    <i class="fas fa-user icon"></i>
                    <input class="input-field" type="text" placeholder="Username" name="usrnm"></input>
                  </div>

                  <div className="input-container">
                    <i className="fas fa-envelope icon"></i>
                    <input className="input-field" type="text" placeholder="Email" name="email"></input>
                  </div>

                  <div className="input-container">
                    <i className="fas fa-key icon"></i>
                    <input className="input-field" type="password" placeholder="Password" name="psw"></input>
                  </div>

                  <button type="submit" className="btn-signup">Create Account</button>
                </form>
                <br></br>
                <div><p className="already"><bold>Already on GCC?</bold><span className="already-link"><Link to="/signin">Sign in</Link></span></p></div>

              </div>
            </div>
          </div>
        </div>
        </div>
      




      /*<div className="container-fluid custom-background">
        <div className='row'>
          <div className="col-6"></div>
          <div className='col-6'>
            <div className ="col-sm-6">

            <div id="layout">
            <form onSubmit={this.handlesubmit} className='form-style'>
                <h2 className="signin-heading">Sign in</h2>
                <div class="form-group">
                  <label>Email</label>
                  <input onChange={this.handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                  <label>Password</label>
                  <input onChange={this.handlePass} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button onClick={this.handlesubmit} type="submit" class="btn-color">Sign in</button>
              </form>
            </div>
              
              <br></br>
              <div><a className="a-link" href="#">Forgot Password ? </a></div>
            </div>
          </div>
        </div>
      </div>

    <div>
        <div className="container">
          <div className="row">
            <div className="col">

            </div>
            <div className="col-6">
              <img className="logo2" src={require("./images/logo2.svg")} />
              <h3>Welcome Back</h3>
              <h5>Don't miss your next opportunity. Sign in to stay updated on your professional world.</h5>
              <br></br>
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address</label>
                  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                  <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn">Sign in</button>
              </form>
            </div>

            <div className="col">

            </div>

          </div>

        </div>


    </div>*/
    );
  }
}

export default Signup;