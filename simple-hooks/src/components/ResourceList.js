import React from 'react';


// const ResourceList = (props) => {
//   return(
//     <h2>The resource is: {props.resource}</h2>
//   )
// }

class ResourceList extends React.Component {
  render() {
    return (
      <h1>Resources: {this.props.resource}</h1>
    )
  }
}


export default ResourceList;