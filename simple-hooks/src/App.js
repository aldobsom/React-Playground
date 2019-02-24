import React, {useState} from 'react';
import './App.css';

const App = () => {
  const [tab, setTab] = useState('Something 1');
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setTab('Something 2');
  // }
  return(
    <>
      <button onClick={()=>setTab('Something 1')}>Tab 1</button>   
      <button onClick={()=>setTab('Something 2')}>Tab 2</button>
      <button onClick={()=>setTab('Something 3')}>Tab 3</button>   
   
      <h1>{tab}</h1>
    </>
  )
}

export default App;
