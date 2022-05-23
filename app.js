const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080;
const bodyparser = require("body-parser")

// App routes

app.use(express.static(__dirname + "/public"));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

// Mongo connection

const db = mongoose.connection;
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error(err));

// Router
eventRouter = require("./routes/event_router");
app.use("/event", eventRouter);

app.listen(port, () => {
    console.log(`App connected on port ${port}`);
});