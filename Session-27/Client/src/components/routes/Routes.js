import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Signin from "../signin/Signin";
import SignUp from "../signup/SignUp";
import Products from "../products/Products";
// import Home from "../home-/Home";
import Home from "../home/Home";
import Users from "../users/Users";
import { authcontext } from "../../context/AuthContext";
import ProductCategroy from "../products/ProductCategroy";

function RoutesComp() {
  const { state } = useContext(authcontext);
  var routes = [
    {
      path: "/",
      element: state != null ? <Home /> : <Signin />,
      internalRoute: null,
    },
    {
      path: "/users",
      element: state != null ? <Users /> : <Signin />,
      internalRoute: null,
    },
    {
      path: "/products",
      element: state != null ? <Products /> : <Signin />,
      internalRoute: [
        {
          path: "",
          element: <Navigate to="allproducts" />,
        },
        {
          path: ":category",
          element: <ProductCategroy />,
        },
        // {
        //   path: ":jewelery",
        //   element: <ProductCategroy />,
        // },
        // {
        //   path: ":mens",
        //   element: <ProductCategroy />,
        // },
        // {
        //   path: ":womens",
        //   element: <ProductCategroy />,
        // },
        // {
        //   path: "electronic",
        //   element: <ProductCategroy />,
        // },
      ],
    },
    { path: "/signup", element: <SignUp />, internalRoute: null },
  ];
  return (
    <Routes>
      {routes.map((route, index) => {
        return route.internalRoute == null ? (
          <Route key={index + 1} path={route.path} element={route.element} />
        ) : (
          <Route key={index + 1} path={route.path} element={route.element}>
            {route.internalRoute.map((iRoute, Iindex) => {
              return (
                <Route
                  key={Iindex + 1}
                  path={iRoute.path}
                  element={iRoute.element}
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
