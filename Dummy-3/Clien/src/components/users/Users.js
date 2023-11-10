import { useContext, useEffect } from "react";
import axios from "axios";

function Users() {
  useEffect(() => {
    axios
      .get("http://localhost:2929/users/getusers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => {});
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ color: "red", fontSize: "52px", marginTop: "100px" }}>
        Component Under Implementation
      </h2>
    </div>
  );
}

export default Users;
