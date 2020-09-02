// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { hrtime } = require("process");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var patrons = [
    {
        PatronName:"name",
        name: "name",
        phoneNumber: 555-1212,
        email: "d@gmail.com",
        uniqueId: them
    },
    {
        PatronName:"name2",
        name: "name2",
        phoneNumber: 555-1213,
        email: "d2@gmail.com",
        uniqueId: alsoThem
      },
      {
        PatronName:"name3",
        name: "name3",
        phoneNumber: 555-1214,
        email: "d3@gmail.com",
        uniqueId: themToo
      },
]

// Routes
// =============================================================





// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("Listening at PORT:" + PORT);
});
