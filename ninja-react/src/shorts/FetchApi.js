import React, {useState, useEffect} from 'react';

const FetchApi = () => {
  const [data, setData] = useState('');

  useEffect( () =>{
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
        setData(data)
    })
  }, []); //this will render once as ComponentDidMount()

  console.log(data);
  
  return (<h1>{data.name}</h1>);
}

export default FetchApi; 