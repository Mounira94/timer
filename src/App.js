import React, { Component } from 'react';
import './App.css';
import Main from './Component/Main';
import Hour from './Component/Hour';

class App extends Component {
  render() {
    return (
      <div className="App">
         <Main />
         <Hour/>
      </div>
    );
  }
}

export default App;