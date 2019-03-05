import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default ({resource}) => {
    const [resources, setResources] = useState([]);

    const fetchResource = async (resource) => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${
            resource
          }`
        );
        setResources(response.data);
    }
    useEffect( () => {
        fetchResource(resource);
    }, [resource])
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