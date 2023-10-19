import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="my-5 mx-auto shadow p-5" style={{ width: "500px" }}>
      <h3>Sign In</h3>
      <div className="my-4">
        <input type="text" placeholder="Enter Email" className="form-control" />
      </div>

      <div className="my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div>
        <button className="btn btn-dark px-5">Sign In</button>
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
