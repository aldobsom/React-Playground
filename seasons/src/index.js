import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

const App = () => {
  return(
    <>
      <h1>Seasons</h1>
      <SeasonDisplay></SeasonDisplay>
    </>
  )
}

ReactDOM.render(<App/>, document.querySelector("#root"));