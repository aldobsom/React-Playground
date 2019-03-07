import React from 'react';
import useResources from './useResources'

export default ({resource}) => {
    const resources = useResources(resource);
    return (
      <>
        <h1>
          Resources {resources.length} {resource}
        </h1>
        <ul>
            {resources.map(record => {
                return <li key={record.id}>{record.title}</li>;
        })}
        </ul>
      </>
    );
}