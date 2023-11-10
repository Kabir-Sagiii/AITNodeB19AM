import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProductCategroy from "./ProductCategroy";

function Products() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <Link className="nav-link" to="allproducts">
                ALL
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="electronic">
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="jewelery">
                Jewelery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="mens">
                Mens Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="womens">
                Womens Clothing
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="row mt-5">
        <Outlet />
      </div>
    </div>
  );
}

export default Products;
