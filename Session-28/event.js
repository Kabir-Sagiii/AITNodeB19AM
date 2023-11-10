var EventEmitter = require("events");
var express = require("express");

var app = express();

var event = new EventEmitter();

const myEventHandler = () => {
  console.log("Custom Event HAndler");
};

// event.once("mycustomevent", myEventHandler);

event.addListener("mycustomevent", myEventHandler);

// event.removeListener()

// event.on("mycustomevent", myEventHandler);

// event.on("mycustomevent", () => {
//   console.log(5 + 5);
// });

// event.on("myanothercustomevent", () => {
//   console.log("Another Event Triggered");
// });

app.get("/emitevent", (req, res) => {
  ///operation

  event.emit("mycustomevent");
  res.send("Evet Triggered");
});

app.get("/emitanotherevent", (req, res) => {
  ///operation

  event.emit("myanothercustomevent");
  res.send("Another Event Triigered");
});

app.listen(5959, () => {
  console.log("Server is Started");
});
