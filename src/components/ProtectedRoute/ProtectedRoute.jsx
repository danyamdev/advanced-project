import React from "react";
import { Route, Redirect } from "react-router-dom";
import {useSelector} from "react-redux";

import {getIdSelector} from "../../store/auth/selectors";

const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  const idUser = useSelector(getIdSelector);

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
