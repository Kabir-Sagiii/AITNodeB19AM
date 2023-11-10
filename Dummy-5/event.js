var EventEmitter = require("events");

var event = new EventEmitter();
const fn = () => {
  console.log("hiiiiiii");
};
event.removeListener("myevent", fn);
event.on("myevent", fn);
event.addListener("myevent", () => {
  console.log("Triggered");
});

event.emit("myevent");
