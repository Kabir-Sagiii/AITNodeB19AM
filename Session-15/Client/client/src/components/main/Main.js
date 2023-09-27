import { useState } from "react";
import Table from "../table/Table";
import axios from "axios";

function Main() {
  const [state, setState] = useState({
    from: "",
    message: "",
  });

  const sendData = () => {
    console.log(state);
    axios.post("http://localhost:5050/newdata", state);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-evenly" }}>
      <div>
        <div>
          <label>From :</label>
          <br />
          <input
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
        <Table />
      </div>
    </div>
  );
}

export default Main;
