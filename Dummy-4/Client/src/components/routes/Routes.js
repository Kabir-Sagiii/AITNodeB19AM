import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../signin/Signin";
import SignUp from "../signup/SignUp";
import Home from "../home/Home";
import Users from "../users/Users";
import { authcontext } from "../../context/AuthContext";
import Products from "../products/Products";
import ProductCategory from "../products/ProductCategory";

function RoutesComp() {
  const { state } = useContext(authcontext);
  var routes = [
    {
      path: "/",
      element: state != null ? <Home /> : <Signin />,
      internalroutes: null,
    },
    {
      path: "/users",
      element: state != null ? <Users /> : <Signin />,
      internalroutes: null,
    },
    {
      path: "/products",
      element: state != null ? <Products /> : <Signin />,
      internalroutes: [
        {
          path: ":id",
          element: <ProductCategory />,
        },
        {
          path: "",
          element: <Navigate to="allproducts" />,
        },
        // {
        //   path: "all",
        //   element: <ProductCategory />,
        // },
        // {
        //   path: "jewelery",
        //   element: <ProductCategory />,
        // },
        // {
        //   path: "men",
        //   element: <ProductCategory />,
        // },
        // {
        //   path: "women",
        //   element: <ProductCategory />,
        // },
      ],
    },
    { path: "/signup", element: <SignUp />, internalroutes: null },
  ];
  return (
    <Routes>
      {routes.map((route, index) => {
        return route.internalroutes == null ? (
          <Route key={index + 1} path={route.path} element={route.element} />
        ) : (
          <Route key={index + 1} path={route.path} element={route.element}>
            {route.internalroutes.map((internalr, nindex) => {
              return (
                <Route
                  key={nindex + 1}
                  path={internalr.path}
                  element={internalr.element}
                />
              );
            })}
          </Route>
        );
      })}
    </Routes>
  );
}

export default RoutesComp;
