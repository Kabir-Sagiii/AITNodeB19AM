import { useState, useEffect } from "react";
import Table from "../table/Table";
import UpdateComp from "../update/UpdateComp";
import axios from "axios";

function Main(props) {
  const [state, setState] = useState({
    from: "",
    message: "",
  });
  const [id, setId] = useState(null);
  const [showupdatecomp, setShowUpdateComp] = useState(false);

  const [usersdata, setUsersData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5050/")
      .then((res) => {
        console.log(res.data.info.results);
        setUsersData(res.data.info.results);
      })
      .catch((err) => {
        console.log(err);
        alert("Something went wrong");
      });
  }, []);

  const sendData = () => {
    console.log(state);
    axios
      .post("http://localhost:5050/newdata", state)
      .then((res) => {
        console.log(res.data);
        axios
          .get("http://localhost:5050/")
          .then((res) => {
            console.log(res.data.info.results);
            setUsersData(res.data.info.results);
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
      {showupdatecomp ? (
        <UpdateComp id={id} setShowUpdateComp={setShowUpdateComp} />
      ) : (
        <div style={{ boxShadow: "0 0 10px green", padding: "20px" }}>
          <h2 style={{ color: "green", textAlign: "center" }}>New User</h2>
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
      )}
      <div>
        <Table
          sdata={{ usersdata, setUsersData }}
          setShowUpdateComp={setShowUpdateComp}
          setId={setId}
        />
      </div>
    </div>
  );
}

export default Main;
