import { useState, useEffect } from "react";
import axios from "axios";

function UpdateComp({ id, setShowUpdateComp, setUsersData }) {
  const [state, setState] = useState({
    from: "",
    message: "",
  });
  useEffect(() => {
    axios
      .get(`http://localhost:5050/getuser/${id}`)
      .then((res) => {
        console.log(res.data.info);
        setState(res.data.info);
      })
      .catch((err) => {
        alert("Error while getting User Info");
        console.log(err);
      });
  }, []);
  const updateUserData = () => {
    axios
      .put("http://localhost:5050/updateuser", state)
      .then((res) => {
        console.log(res.data);
        setShowUpdateComp(false);
        axios
          .get("http://localhost:5050/")
          .then((res) => {
            console.log(res.data);
            setUsersData(res.data.info.results);
          })
          .catch((err) => {
            console.log(err);
            alert("Failed to get updated data");
          });
      })
      .catch((error) => {
        alert("Error while updating User");
        console.log(error);
      });
  };
  return (
    <div style={{ boxShadow: "0 0 10px blue", padding: "20px" }}>
      <h2 style={{ color: "blue", textAlign: "center" }}>Update User</h2>
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
        <button onClick={updateUserData}>Update Details</button>
      </div>
    </div>
  );
}

export default UpdateComp;
