import React from "react";
import { Routes, Route } from "react-router-dom";
import Signin from "../signin/Signin";
import SignUp from "../signup/SignUp";
import Home from "../home/Home";
import Users from "../users/Users";

function RoutesComp() {
  var routes = [
    { path: "/", element: <Signin /> },
    { path: "/users", element: <Users /> },
    { path: "/signup", element: <SignUp /> },
  ];
  return (
    <Routes>
      {routes.map((route, index) => {
        return (
          <Route key={index + 1} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
}

export default RoutesComp;
