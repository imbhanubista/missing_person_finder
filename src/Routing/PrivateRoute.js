import React from "react";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ isLogged, children }) => {
  return isLogged ? children : <Navigate to="/" />;
  //   here "children" called what is wrapped inside the the "Private Route" in Routing page
};

export default PrivateRoute;
