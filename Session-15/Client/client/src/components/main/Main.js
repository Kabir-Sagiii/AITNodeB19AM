import { useState } from "react";
import Table from "../table/Table";
import axios from "axios";

function Main() {
  const [state, setState] = useState({
    from: "",
    message: "",
  });

  const [usersdata, setUsersData] = useState([]);

  const sendData = () => {
    console.log(state);
    axios
      .post("http://localhost:5050/newdata", state)
      .then((res) => {
        console.log(res.data);
        axios
          .get("http://localhost:5050/")
          .then((res) => {
            console.log(res.data.results.results);
            setUsersData(res.data.results.results);
            setState({
              from: "",
              message: "",
            });
          })
          .catch((err) => {
            alert("Failed to receive the data");
            console.log(err);
          });
      })
      .catch((err) => {
        alert("Error");
        console.log(err);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <div>
          <label>From :</label>
          <br />
          <input
            value={state.from}
            type="text"
            onChange={(e) => {
              setState({
                ...state,
                from: e.target.value,
              });
            }}
          />
        </div>
        <br />

        <div>
          <label>Message : </label>
          <br />
          <textarea
            value={state.message}
            rows={10}
            cols="51"
            onChange={(e) => {
              setState({
                ...state,
                message: e.target.value,
              });
            }}
          ></textarea>
        </div>

        <div style={{ marginTop: "10px" }}>
          <button onClick={sendData}>Submit</button>
        </div>
      </div>

      <div>
        <Table usersdata={usersdata} />
      </div>
    </div>
  );
}

export default Main;
