import { useState, useEffect } from "react";
import axios from "axios";

function Update(props) {
  const [state, setState] = useState({
    from: "",
    message: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5050/getdata/${props.idDetails.id}`)
      .then((res) => {
        console.log(res.data);
        setState(res.data.results);
      })
      .catch((err) => {
        alert("Something went wrng");
      });
  }, []);

  const updateData = () => {
    axios
      .put("http://localhost:5050/update", state)
      .then((res) => {
        console.log(res.data);
        axios
          .get("http://localhost:5050/")
          .then((res) => {
            props.userd.setUsersData(res.data.results.results);
          })
          .catch((err) => {
            console.log(err);
            alert("Error after getting updated data");
          });
      })
      .catch((error) => {
        alert("error");
      });
  };
  return (
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
        <button
          onClick={() => {
            props.data.setState(true);
            updateData();
          }}
        >
          Update Data
        </button>
      </div>
    </div>
  );
}

export default Update;
