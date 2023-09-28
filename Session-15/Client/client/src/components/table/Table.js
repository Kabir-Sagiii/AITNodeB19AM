import { useState, useEffect } from "react";
import axios from "axios";

function Table({ usersdata }) {
  // const [state, setState] = useState({
  //   results: [],
  // });
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5050/")
  //     .then((res) => {
  //       console.log(res.data);
  //       setState(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       alert("Something went wrong");
  //     });
  // }, []);
  return (
    <div>
      <h2>Data From Server</h2>
      <table width={500} cellPadding={5}>
        <tr bgColor="black" style={{ color: "white" }}>
          <th>FROM</th>
          <th>MESSAGE</th>
          <th colSpan={2}>ACTION</th>
        </tr>
        {usersdata.length > 0 &&
          usersdata.map((usersinfo) => {
            return (
              <tr>
                <td>{usersinfo.from}</td>
                <td>{usersinfo.message}</td>
                <td>
                  <button>Update</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Table;
