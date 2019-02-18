import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    }
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", this.state.name )
  }
  render() {
    return (
      <div className="App">
        <h2>Hello {this.state.name}</h2>
        <form onSubmit = {this.handleSubmit}>
          <input onChange={this.handleChange} type="text"></input>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
