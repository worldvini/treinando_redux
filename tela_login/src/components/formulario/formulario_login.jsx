import React, { Component } from 'react';
import css from './form_login.css'

class FormLogin extends Component {
    constructor(props){
        super(props);
        this.state = {
            login: '',
            password: '', 
            resultado: ''
        }
    }
    handleChangeLogin = e => {
        this.setState({login: e.target.value.toUpperCase()})
    }
    handleChangePassword = e => {
        this.setState({password: e.target.value.toUpperCase()})
    }
    handleChangeH1 = () => {
        this.setState({resultado: this.state.login + ' : ' + this.state.password})
    }

  render() {
      let {login, password, resultado} = this.state
    return (
      <div className="FormLogin">
          <h1>{resultado}</h1>
        <input type='text' value={login} onChange={this.handleChangeLogin}/>
        <input type='text' value={password} onChange={this.handleChangePassword}/>
        <button onClick={this.handleChangeH1}>Login</button>
      </div>
    );
  }
}

export default FormLogin;