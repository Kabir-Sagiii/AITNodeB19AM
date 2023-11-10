var express = require("express");
var multer = require("multer");
var cors = require("cors");

var app = express();
app.use(cors());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "./Images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

var images = multer({ storage });

app.get("/", (req, res) => {
  res.send("<h2>Working </h2>");
});

// app.post("/image", images.array("myimage", 3), (req, res) => {
//   res.send("<h1>Image Uploaded Successfully</h1>");
// });

app.post("/image", images.single("myimage"), (req, res) => {
  // console.log(req.files);
  res.send({
    ok: true,
    result: "Successfully uploaded",
  });
});

app.listen(7979, () => {
  console.log("Server Started");
});
