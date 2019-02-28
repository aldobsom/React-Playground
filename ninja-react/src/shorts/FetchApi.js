import React, {useState, useEffect, useContext} from 'react';
import SomeStyle from './SomeStyle';

const FetchApi = () => {
  const [data, setData] = useState('');
  const stil = useContext(SomeStyle);

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
  
  return (<h1 style={stil}>{data.name}</h1>);
}

export default FetchApi; 