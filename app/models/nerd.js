"use strict";
let mongoose = require("mongoose");

module.exports = mongoose.model("Nerd", {
  name: {type: String, default: ""}
});
