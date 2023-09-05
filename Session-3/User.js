function user1() {
  console.log("User1 is called");
}

function changeCity() {
  //logic to change city
  console.log("City Changed Successfully");
  f2();
}
function f2() {
  console.log("f2 is called");
}

module.exports = {
  user1,
  changeCity,
};
