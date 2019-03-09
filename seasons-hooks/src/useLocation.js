import {useEffect, useState} from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
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
  }, []) //this will happen once

  return [lat, errorMessage];
}