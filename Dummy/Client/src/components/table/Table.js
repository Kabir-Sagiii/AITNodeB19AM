import { useState, useEffect } from "react";
import axios from "axios";

function Table({ sdata, setShowUpdateComp, setId }) {
  const renderUpdateComp = (id) => {
    setShowUpdateComp(true);
    setId(id);
  };

  const deleteData = (id) => {
    axios.delete(`http://localhost:5050/delete/${id}`).then((res) => {
      alert("Deleted successfully");
      axios
        .get("http://localhost:5050/")
        .then((res) => {
          console.log(res.data);
          sdata.setUsersData(res.data.info.results);
        })
        .catch((err) => {
          console.log(err);
          alert("Failed to get updated data");
        });
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
        {sdata.usersdata.length > 0 &&
          sdata.usersdata.map((usersinfo) => {
            return (
              <tr>
                <td>{usersinfo.from}</td>
                <td>{usersinfo.message}</td>
                <td>
                  <button
                    onClick={() => {
                      renderUpdateComp(usersinfo.id);
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
