import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [state, setState] = useState({
    email: "",
    password: "",
    phone: "",
  });
  const submitData = () => {
    axios
      .post("http://localhost:2929/users/newuser", state)
      .then((res) => {
        console.log(res.data);
        setState({
          email: "",
          password: "",
          phone: "",
        });
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  };
  return (
    <div className="w-50 mx-auto my-5 shadow-lg  p-5">
      <h2>Sign Up</h2>
      <div className="mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter email"
          value={state.email}
          onChange={(e) => {
            setState({ ...state, email: e.target.value });
          }}
        />
      </div>
      <div className="mt-3">
        <input
          onChange={(e) => {
            setState({ ...state, password: e.target.value });
          }}
          value={state.password}
          type="password"
          className="form-control"
          placeholder="Password"
        />
      </div>
      <div className="mt-3">
        <input
          type="phone"
          onChange={(e) => {
            setState({ ...state, phone: e.target.value });
          }}
          value={state.phone}
          className="form-control"
          placeholder="Phone"
        />
      </div>
      <div className="mt-3">
        <button className="btn btn-dark px-5" onClick={submitData}>
          Register
        </button>
      </div>

      <div className="mt-3">
        <Link to="/">Already Have a Acoount</Link>
      </div>
    </div>
  );
}

export default SignUp;
