const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const reservations = [
    {
        name: "bob",
        email: "bob@bob.com",
        phone: "123-4567",
        table: 1
    }
]
const waitingList = [
    {
        name: "bob",
        email: "bob@bob.com",
        phone: "123-4567",
        table: 1
    }
]
app.get("/", function(req,res) {
    res.sendFile(path.join(___dirname, "home.html"));
});
app.get("/make", function(req,res) {
    res.sendFile(path.join(___dirname, "makeres.html"));
});
app.get("/tables", function(req,res) {
    res.sendFile(path.join(___dirname, "tables.html"));
});
app.get("/api/reservations", function (req, res) {
    res.json(reservations)
};
app.get("/api/waitinglist", function(req,res) {
    res.json(waitinglist)
})
app.post("/api/tables", function(req,res) {
    const newReservation = req.body;
    console.log(newReservation);
    if (reservations.length >= 5) {
        waitingList.push(newReservation)
    }
    else {
        reservations.push(newReservation)
    }
});
app.post("/cleartables", function(req, res) {
    reservations = [];
});