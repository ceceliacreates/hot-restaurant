const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const reservations = [
    {
        fname: "bob",
        lname: "smith",
        email: "bob@bob.com",
        phone: "123-4567",
        table: 1
    }
]
const waitingList = [
    {
        fname: "bob",
        lname: "smith",
        email: "bob@bob.com",
        phone: "123-4567",
        table: 1
    }
]
app.get("/", function(req,res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/make", function(req,res) {
    res.sendFile(path.join(__dirname, "makeres.html"));
});
app.get("/tables", function(req,res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});
app.get("/api/reservations", function (req, res) {
    res.json(reservations)
});
app.get("/api/waitinglist", function(req,res) {
    res.json(waitingList)
})
app.post("/api/tables", function(req,res) {
    const newReservation = req.body;
    console.log(newReservation);
    if (reservations.length >= 5) {
        waitingList.push(newReservation);
    }
    else {
        reservations.push(newReservation);
    }
    res.redirect("/")
});
app.post("/cleartables", function(req, res) {
    reservations = [];
    waitingList = []
});

app.listen(PORT, function() {
    console.log("App listening at http://localhost:" + PORT)
})