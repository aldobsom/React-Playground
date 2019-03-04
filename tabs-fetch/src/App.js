import React, {useState} from 'react';
import './App.css';
import ResourceList from './comps/ResourceList';

const App = () => {
  const [resource, setResource] = useState('Tab 1 Content');
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setTab('Something 2');
  // }
  return(
    <>
      <button onClick={()=>setResource('Tab 1 Content')}>Tab 1</button>   
      <button onClick={()=>setResource('Tab 2 Content')}>Tab 2</button>
      <button onClick={()=>setResource('Tab 3 Content')}>Tab 3</button>   
   
      <ResourceList resource={resource}/>
    </>
  )
}

export default App;