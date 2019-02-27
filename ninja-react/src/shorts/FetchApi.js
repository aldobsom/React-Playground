import React, {useState, useEffect} from 'react';

const FetchApi = () => {
  const [data, setData] = useState('');

  //this will render once as ComponentDidMount()
  useEffect( () =>{  
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
        setData(data)
    })
  }, []); // if is [] then no update nor continuous loop (ComponentDidUpdate)
//it's only gonna be called when data changes ( [something] ) 

  console.log(data);
  
  return (<h1>{data.name}</h1>);
}

export default FetchApi; 