import { Link } from "react-router-dom";
function Nav() {
  return (
    <div className="bg-dark navbar navbar-dark p-3">
      <div>
        <Link to="" className="navbar-brand px-5 mx-5 ">
          Ecommerce App
        </Link>
      </div>
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/users">
            Users
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="#">
            Cart
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <button>Logout</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
