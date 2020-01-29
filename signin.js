import React, { Component } from "react";
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./signin.css";


class Signin extends Component {
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
    axios.post('http://localhost:8080/api/login', {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.pass
    })
      .then(response => {
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("email", response.data.email);

        } else {
          alert("username or password is incorrect");
        }
      }).catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-6"><img className="img" src={require("./images/preview.png")} /></div>
        <div class="col-6" id="">
          <div class="card">
            <div class="card-body">
              <form className='form-style'>
                <h2 className="Welcome">Sign in </h2>

                <div class="input-container">
                  <i class="fas fa-envelope icon"></i>
                  <input class="input-field" type="text" placeholder="Email" name="email"></input>
                </div>

                <div class="input-container">
                  <i class="fas fa-key icon"></i>
                  <input class="input-field" type="password" placeholder="Password" name="psw"></input>
                </div>

                <button type="submit" class="btn-signup">Sign in</button>
              </form>

            </div>
          </div>
        </div>
      </div>

      </div >
    
    );
  }
}

export default Signin;