import { useState, useEffect } from "react";
import axios from "axios";

function Table({ sdata, data, idDetails }) {
  console.log("cdsc", sdata);
  const deleteData = (id) => {
    axios
      .delete(`http://localhost:5050/delete/${id}`)
      .then((res) => {
        alert(res.data);
        axios
          .get("http://localhost:5050/")
          .then((res) => {
            sdata.setUsersData(res.data.results.results);
          })
          .catch((err) => {
            alert("Not fetcable");
            console.log(err);
          });
      })
      .catch((error) => {
        alert("error while deleting");
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Data From Server</h2>
      <table width={500} cellPadding={5}>
        <tr bgColor="black" style={{ color: "white" }}>
          <th>FROM</th>
          <th>MESSAGE</th>
          <th colSpan={2}>ACTION</th>
        </tr>
        {sdata.usersdata.results.length > 0 &&
          sdata.usersdata.results.map((usersinfo) => {
            return (
              <tr>
                <td>{usersinfo.from}</td>
                <td>{usersinfo.message}</td>
                <td>
                  <button
                    onClick={() => {
                      data.setState(false);
                      idDetails.setId(usersinfo.id);
                    }}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteData(usersinfo.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Table;
