import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginuser } from "../../services/UserService";
import { authcontext } from "../../context/AuthContext";

function Signin() {
  let navigate = useNavigate();
  let { setState } = useContext(authcontext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const clearform = () => {
    setUser({
      email: "",
      password: "",
    });
  };
  return (
    <div className="my-5 mx-auto shadow p-5" style={{ width: "500px" }}>
      <h3>Sign In</h3>
      <div className="my-4">
        <input
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({
              ...user,
              email: e.target.value,
            });
          }}
          placeholder="Enter Email"
          className="form-control"
        />
      </div>

      <div className="my-4">
        <input
          type="password"
          value={user.password}
          onChange={(e) => {
            setUser({
              ...user,
              password: e.target.value,
            });
          }}
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button
          className="btn btn-dark px-5"
          onClick={() => {
            loginuser(user, clearform, setState);
          }}
        >
          Sign In
        </button>
      </div>

      <div className="mt-5">
        <Link className="" to="/signup">
          Create a Account
        </Link>
      </div>
    </div>
  );
}

export default Signin;
