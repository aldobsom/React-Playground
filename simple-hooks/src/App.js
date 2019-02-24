import React, {useState} from 'react';
import './App.css';
import ResourceList from './components/ResourceList';

const App = () => {
  const [resource, setResource] = useState('Something 1');
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setTab('Something 2');
  // }
  return(
    <>
      <button onClick={()=>setResource('Something 1')}>Tab 1</button>   
      <button onClick={()=>setResource('Something 2')}>Tab 2</button>
      <button onClick={()=>setResource('Something 3')}>Tab 3</button>   
   
      <ResourceList resource={resource}/>
    </>
  )
}

export default App;
