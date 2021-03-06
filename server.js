// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
const { hrtime } = require("process");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname));

var waiting = [];
var patrons = [
    {
        name: "name",
        phoneNumber: "555-1212",
        email: "d@gmail.com",
        uniqueId: 1
    },
    {
        name: "name2",
        phoneNumber: "555-1213",
        email: "d2@gmail.com",
        uniqueId: 2
    },
    {
        name: "name3",
        phoneNumber: "555 - 1214",
        email: "d3@gmail.com",
        uniqueId: 3
    },
];
console.log(__dirname);
// Routes
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/", "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/", "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname + "/public/", "reserve.html"));
});

app.get("/api/patrons", function (req, res) {
    return res.json(patrons);
});

app.get("/api/waiting", function (req, res) {
    return res.json(waiting);
})
app.get("/api/patrons/:patrons", function (req, res) {
    var chosen = req.params.patrons;

    console.log(chosen);

    for (var i = 0; i < patrons.length; i++) {
        if (chosen === patrons[i].patronName) {
            return res.json(patrons[i]);
        }
    }

    return res.json(false);
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("Listening at PORT:" + PORT);
});
