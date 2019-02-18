import React from 'react';

export default class Ninjas extends React.Component {
  render() {
    const ninjaList = this.props.ninjas.map(ninja => {
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
}