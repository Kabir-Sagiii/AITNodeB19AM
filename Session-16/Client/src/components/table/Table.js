import { useState, useEffect } from "react";
import axios from "axios";

function Table({ sdata, setShowUpdateComp, setId }) {
  const renderUpdateComp = (id) => {
    setShowUpdateComp(true);
    setId(id);
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
