import { Link } from "react-router-dom";
import { useContext } from "react";
import { authcontext } from "../../context/AuthContext";
function Nav() {
  let { setState } = useContext(authcontext);
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
          <Link className="nav-link text-white" to="/products">
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
                localStorage.removeItem("token");
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
