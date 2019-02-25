import React, {useState} from 'react';

const IsOnline = () => {

  const [status, setStatus] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Status is:" + status);
    setStatus(!status);
  } 

  return(
    <>
      <h1>You are: {status === true ? "Online" : "Offline"}</h1>
      <button onClick={handleClick}>Get {status === true ? "Offline" : "Online"}</button>
    </>
  )
}

export default IsOnline;