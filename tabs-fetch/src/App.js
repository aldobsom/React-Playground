import React, {useState} from 'react';
import './App.css';
import ResourceList from './comps/ResourceList';

const App = () => {
  const [resource, setResource] = useState("posts");
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setTab('Something 2');
  // }
  return(
    <>
      <button onClick={()=>setResource('posts')}>Posts</button>   
      <button onClick={()=>setResource('todos')}>Todos</button>
   
      <ResourceList resource={resource}/>
    </>
  )
}

export default App;