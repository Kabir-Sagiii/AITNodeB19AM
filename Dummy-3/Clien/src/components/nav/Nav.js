import { Link } from "react-router-dom";
import { authcontext } from "../../context/AuthContext";
import { useContext } from "react";
function Nav() {
  const { setState } = useContext(authcontext);
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
            <button
              onClick={() => {
                setState(null);
              }}
            >
              Logout
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
