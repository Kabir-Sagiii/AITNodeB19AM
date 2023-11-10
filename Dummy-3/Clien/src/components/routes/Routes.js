import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../signin/Signin";
import SignUp from "../signup/SignUp";
import Home from "../home/Home";
import Users from "../users/Users";
import { authcontext } from "../../context/AuthContext";

function RoutesComp() {
  const { state } = useContext(authcontext);
  var routes = [
    // { path: "/", element: state == null ? <Signin /> : <Home /> },
    { path: "/", element: state != null ? <Home /> : <Signin /> },
    {
      path: "/users",
      element: state == null ? <Navigate to="/" /> : <Users />,
    },
    {
      path: "/signup",
      element: state == null ? <Navigate to="/" /> : <SignUp />,
    },
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
