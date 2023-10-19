import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const login = () => {
    axios
      .post("http://localhost:2929/users/login", user)
      .then((res) => {
        console.log(res.data);
        setUser({ email: "", password: "" });
        localStorage.setItem("token", JSON.stringify(res.data.token));
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to Login");
      });
  };
  return (
    <div className="w-50 mx-auto my-5 shadow-lg  p-5">
      <h2>Sign In</h2>
      <div className="mt-3">
        <input
          type="text"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          className="form-control"
          placeholder="Enter Name"
        />
      </div>
      <div className="mt-3">
        <input
          type="password"
          value={user.password}
          className="form-control"
          placeholder="Password"
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
        />
      </div>
      <div className="mt-3">
        <button className="btn btn-dark px-5" onClick={login}>
          Login
        </button>
      </div>

      <div className="mt-3">
        <Link to="/signup">Create a Account</Link>
      </div>
    </div>
  );
}

export default SignIn;
