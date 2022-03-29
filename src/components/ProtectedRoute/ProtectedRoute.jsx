import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  idUser,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={() =>
        idUser ? (
          <Component />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
