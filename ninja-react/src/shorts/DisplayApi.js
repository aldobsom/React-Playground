import React, {Suspense}  from 'react';
const FetchApi = React.lazy( () => import('./FetchApi'));

const DisplayApi = () => {
  return(
    <Suspense fallback = "Loading...">
      <FetchApi/>
    </Suspense>
  );
}

export default DisplayApi;