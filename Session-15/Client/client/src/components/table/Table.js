import React from "react";

function Table() {
  return (
    <div>
      <h2>Data From Server</h2>
      <table width={500} cellPadding={5}>
        <tr bgColor="black" style={{ color: "white" }}>
          <th>FROM</th>
          <th>MESSAGE</th>
          <th>ACTION</th>
        </tr>
      </table>
    </div>
  );
}

export default Table;
