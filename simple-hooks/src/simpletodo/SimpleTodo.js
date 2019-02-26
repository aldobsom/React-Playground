import React, {useState} from 'react';
import data from './data';

import './todo.css';

const SimpleTodo = () => {
  const [mydata, setMydata] = useState(data);
  console.log(mydata);

  const mystuff = mydata.map(item => {
        return(
          <li key={item.id} >
            <input type="checkbox"/>
            <p>{item.text}</p>
          </li>
        )
  }) 

  return(
    < >
      {mystuff}
    </>
  )
}

export default SimpleTodo;