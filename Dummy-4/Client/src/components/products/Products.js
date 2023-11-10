import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
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
              <Link className="nav-link" to="men">
                Mens Clothing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="women">
                Womens Clothing
              </Link>
            </li>
          </ul>
        </div>

        <div className="row mt-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Products;
