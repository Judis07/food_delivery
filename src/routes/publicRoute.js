import React from "react";
import { Redirect, Route } from "react-router-dom";

function PublicRoute({ component: Component, ...restOfProps }) {
  let currentUser = JSON.parse(localStorage.getItem("user"));

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        !currentUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default PublicRoute;
