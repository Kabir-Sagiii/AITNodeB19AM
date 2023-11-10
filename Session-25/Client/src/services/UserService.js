import axios from "axios";

export const registerUser = (data, clearform, navigate) => {
  axios
    .post("http://localhost:2929/users/newuser", data)
    .then((res) => {
      console.log(res.data);
      alert("Account Created Successfully");
      navigate("/");
      clearform();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to Register User");
    });
};

export const loginuser = (data, clearform, navigate) => {
  axios
    .post("http://localhost:2929/users/login", data)
    .then((res) => {
      console.log(res.data);
      alert("Successfully Loggedin");

      localStorage.setItem("token", res.data.token);

      clearform();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to Login User");
    });
};
