import React, {useState} from 'react';

const IsOnline = () => {

  const [status, setStatus] = useState('offline');

  const handleClick = (e) => {
    e.preventDefault();
    if(status === 'offline') {
      return setStatus('online');
    }
    setStatus('offline');
  } 

  return(
    <>
      <h1>You are: {status}</h1>
      <button onClick={handleClick}>Get {status === 'offline' ? 'online' : 'offline'}</button>
    </>
  )
}

export default IsOnline;