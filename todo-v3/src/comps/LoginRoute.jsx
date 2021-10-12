import React, { Children } from "react";
import { BrowserRouter } from "react-router-dom";

function LoginRoute({ children }) {
  return <BrowserRouter>{children}</BrowserRouter>;
}

export default LoginRoute;
