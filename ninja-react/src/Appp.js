import React, { Component } from 'react';
import './App.css';
import Ninjas from './Ninjas';

class App extends Component{
  state = {
    ninjas: [
      {name: "Ryu", age: 30, belt: "red", id: 1},
      {name: "Melk", age: 34, belt: "blue", id: 2},
      {name: "Lola", age: 28, belt: "yellow", id:3}
    ]
  }

  render() {
    return (
      <div className="App">
        <Ninjas ninjas={this.state.ninjas} />
      </div>
    );
  }
}

export default App;
