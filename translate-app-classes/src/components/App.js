import React, { Component } from 'react';
import './App.css';
import UserCreate from './UserCreate'

class App extends Component {
  state = {language: 'english'};

  onLanguageChange = language => {
    this.setState({language});
  }

  render() {
    return (
      <div className="ui container">
         <div>
           Select a language:
            <i className="flag us" onClick={() => this.onLanguageChange('english')}></i>
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}></i>
         </div>
         <UserCreate />
         <div>Language selected: {this.state.language}</div>
      </div>
    );
  }
}

export default App;