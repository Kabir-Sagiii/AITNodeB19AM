import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signup/SignUp";
import Users from "../components/users/Users";

function Router() {
  var routes = [
    { path: "/", element: <SignIn /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/users", element: <Users /> },
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

export default Router;
