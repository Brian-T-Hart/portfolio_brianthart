if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config();
}

var express = require("express");
var bodyParser = require("body-parser");

// Set up the Express App
var app = express();
var PORT = process.env.PORT || 3001;

// routes
var index = require("./controllers/index");
var contact = require("./controllers/contact");
// var mail = require("./controllers/mail");

// Set up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vmd.api+json" }));

// Static Directory
app.use(express.static("client/build"));

app.use("/", index);
app.use("/contact", contact);
// app.use("/mail", mail);

app.listen(PORT, function () {
	console.log("App is listening on PORT " + PORT);
});

module.exports = app;