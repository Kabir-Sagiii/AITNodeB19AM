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
