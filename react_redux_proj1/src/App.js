import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/cart';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Exemplo retirado de https://www.youtube.com/watch?v=eN6CfnTDsQc
          
        </p>
        <Card />
      </div>
    );
  }
}

export default App;
