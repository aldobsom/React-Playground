import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
  lat: null,
  errorMessage: ''
  }
  componentDidMount() {
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
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner />
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"));