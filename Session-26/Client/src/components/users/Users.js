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
        <div>
          {" "}
          <h2 style={{ color: "green", fontSize: "52px", marginTop: "100px" }}>
            Users Info
          </h2>{" "}
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
