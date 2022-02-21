import React, { Fragment } from "react";
import RoutePages from "./REACT ROUTER/RoutePages";
import RouteProducts from "./REACT ROUTER/RouteProducts";

function App() {

  return (
    <Fragment>
      <h1>
        React Router Practice No. 1:
      </h1>
      <RoutePages />
    </Fragment>
  );
}

function Products(){
  return(
    <Fragment>
      <h1>
        React Router Practice No. 2:
      </h1>
      <RouteProducts />
    </Fragment>
  );
}

export { App };
export { Products };
