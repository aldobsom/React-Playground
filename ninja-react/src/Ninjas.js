import React from 'react';

const Ninjas = props => {
  const ninjaList = props.ninjas.map(ninja => {
    return(
      <div className="ninja" key={ninja.id}>
        <div>Name: {ninja.name}</div>
        <div>Age: {ninja.age}</div>
        <div>Belt: {ninja.belt}</div>
      </div>
    )
  })
return(
  <div>
    {ninjaList}
  </div>
)
}

export default Ninjas;