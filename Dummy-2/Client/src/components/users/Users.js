import { useEffect } from "react";
import axios from "axios";

function Users() {
  alert(JSON.parse(localStorage.getItem("token")));
  useEffect(() => {
    axios
      .get("http://localhost:2929/users/getusers", {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        if (!res.data.ok) {
          throw Error(res.data.error);
        } else {
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to get Users Data");
      });
  });

  return (
    <div>
      <h2>Users Component</h2>
    </div>
  );
}

export default Users;
