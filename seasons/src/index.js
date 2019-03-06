import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ''
    }
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        this.setState({ lat: position.coords.latitude })
      },
      err => {
        console.log(err);
        this.setState({ errorMessage: err.message })
      }
    );
  }
  render() {
    if (!this.state.lat && this.state.errorMessage) {
      return <h1>Error: "{this.state.errorMessage}"</h1>
    }
    if (this.state.lat && !this.state.error) {
      return <h1>Your latitude is: {this.state.lat}</h1>
    }

    return <h2>Loading...</h2>
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));