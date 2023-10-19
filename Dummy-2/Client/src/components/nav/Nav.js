import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar nav-dark bg-dark">
      <Link to="" className="navbar-brand px-5 text-white">
        Ecommerce App
      </Link>
      <ul className="nav pe-5 me-5">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
