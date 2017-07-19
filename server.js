(function(){
  "use strict";

let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");

let app = express();

//config files
let db = require("./config/db");

//setting up port
let port = process.env.PORT || 3000;

//parse json
app.use(bodyParser.json());

//---------------------------COPIED--------------------------
// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride("X-HTTP-Method-Override"));


//-----------------------------------------------------------


//for static files
app.use(express.static(__dirname + "/public"));

//------------------ routes ---------------------
require("./app/routes")(app); // configure our routes

//---------------- start app ---------------------
app.listen(port, function() {
    console.log("express started on port %s!", port);
});

exports = module.exports = app;
}());
