import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect( () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
        setLat(position.coords.latitude);
      },
      err => {
        console.log(err);
        setErrorMessage(err.message);
      }
    );
  }, [] ) //this will happen once

  let content;
  if(errorMessage) {
    content = <div>Error: {errorMessage}</div>
  } else if (lat) {
    content = <SeasonDisplay lat={lat}/>
  } else {
    content = <Spinner message="Please accept location request"/>
  }

  return <div className="border red">{content}</div>;
}


ReactDOM.render(<App/>, document.querySelector("#root"));