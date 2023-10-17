var User = require("../model/userModel");

const get_userdata = async (req, res) => {
  try {
    var data = await User.find({});

    res.send({
      status: true,
      numberofusers: data.length,
      data,
    });
  } catch (err) {
    res.send({
      status: false,

      data: err,
    });
  }
};

const post_userdata = async (req, res) => {
  try {
    var user = new User(req.body);

    var resp = await user.save();

    res.send({
      status: true,
      data: "Inserted Successfully",
    });
  } catch (err) {
    res.send({
      status: false,
      data: err,
    });
  }
};

module.exports = {
  get_userdata,
  post_userdata,
};
