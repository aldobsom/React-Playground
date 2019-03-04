import React, { Component } from 'react';
import './App.css';
import Header from './comps/Header';
import MemeGenerator from './comps/MemeGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <MemeGenerator/>
      </div>
    );
  }
}

export default App;
