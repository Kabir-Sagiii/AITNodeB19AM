import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../signin/Signin";
import SignUp from "../signup/SignUp";

function RoutesComp() {
  var routes = [
    { path: "/", element: <Signin /> },
    { path: "/signup", element: <SignUp /> },
  ];
  return (
    <Routes>
      {routes.map((route) => {
        return <Route path={route.path} element={route.element} />;
      })}
    </Routes>
  );
}

export default RoutesComp;
