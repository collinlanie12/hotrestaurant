// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Routes
// =============================================================
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function (req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/patrons", function (req, res) {
    return res.json(patrons);
});

app.get("/api/patrons/:patrons", function (req, res) {
    var chosen = req.params.patrons;

    console.log(chosen);

    for (var i = 0; i < patrons.length; i++) {
        if (chosen === patrons[i].routeName) {
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
