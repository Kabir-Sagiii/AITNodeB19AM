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

export const loginuser = (data, clearform, setState) => {
  axios
    .post("http://localhost:2929/users/login", data)
    .then((res) => {
      console.log(res.data);
      try {
        if (res.data.ok) {
          setState(res.data.token);

          localStorage.setItem("token", res.data.token);
          clearform();
        } else {
          throw Error(res.data.error);
        }
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to Login User");
    });
};
