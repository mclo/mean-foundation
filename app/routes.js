"use strict";
let path = require("path");
let Nerd = require("./models/nerd");

module.exports = function(app){

  app.get("/api/nerds", function(req, res){
    Nerd.find(function(err, nerds){
      if(err){
        res.send(err);
      }

      res.json(nerds); //return all nerds in json format
    });

  });




  //---------------- FRONT-END routes --------------------------
  //route to handle angular request
  app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
