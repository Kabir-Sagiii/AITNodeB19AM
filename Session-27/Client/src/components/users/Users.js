import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:2929/users/getusers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) {
          setState(res.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {state.length > 0 ? (
        <div className="container mt-5">
          <table className="table table-stripped table-hover">
            <thead className="table-dark">
              <tr>
                <th>EMAIL ID</th>
                <th>PASSWORD</th>
                <th>PHONE</th>
                <th colSpan={2}>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {state.map((user) => {
                return (
                  <tr>
                    <td>{user.email}</td>
                    <td>{user.password}</td>
                    <td>{user.phone}</td>
                    <td>
                      <button className="btn btn-outline-success">Edit</button>
                    </td>
                    <td>
                      <button className="btn btn-outline-danger">Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 style={{ color: "red", fontSize: "52px", marginTop: "100px" }}>
          Error While Receving Users Data
        </h2>
      )}
    </div>
  );
}

export default Users;
