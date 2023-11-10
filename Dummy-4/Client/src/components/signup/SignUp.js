import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../../services/UserService";
import { useNavigate } from "react-router-dom";

function SignUp() {
  let navigate = useNavigate();
  let [newUser, setNewUser] = useState({
    email: "",
    password: "",
    phone: "",
  });

  const clearform = () => {
    setNewUser({
      email: "",
      password: "",
      phone: "",
    });
  };
  return (
    <div className="my-5 mx-auto shadow p-5" style={{ width: "500px" }}>
      <h2>Sign Up</h2>
      <div className="mt-4">
        <input
          value={newUser.email}
          type="email"
          placeholder="Enter Email"
          className="form-control"
          onChange={(event) => {
            setNewUser({ ...newUser, email: event.target.value });
          }}
        />
      </div>
      <div className="mt-4">
        <input
          value={newUser.password}
          type="password"
          placeholder="Create Password"
          className="form-control"
          onChange={(event) => {
            setNewUser({ ...newUser, password: event.target.value });
          }}
        />
      </div>
      <div className="mt-4">
        <input
          value={newUser.phone}
          type="phone"
          placeholder="Enter Phone No"
          className="form-control"
          onChange={(event) => {
            setNewUser({ ...newUser, phone: event.target.value });
          }}
        />
      </div>

      <div className="mt-4">
        <button
          className="btn btn-dark px-5"
          onClick={() => {
            registerUser(newUser, clearform, navigate);
          }}
        >
          Sign Up
        </button>
      </div>

      <div className="mt-4">
        <Link to="/">Alreday Have a Account ?</Link>
      </div>
    </div>
  );
}

export default SignUp;
