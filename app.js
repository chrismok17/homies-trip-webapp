const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080

// App routes

app.use(express.static(__dirname + "/public"))

app.set("view engine", "ejs");

// app.use("/", (req, res) => {
//     res.render("home")
// })


// Router
EventRouter = require("./routes/event_router")
app.use("/", EventRouter)

// Mongo connection

const db = mongoose.connection;
require("dotenv").config();

mongoose.connect(process.env.DB_CONNECTION);
db.once("open", () => {
    console.log("Connected to event-details database")
})

app.listen(port, () => {
    console.log(`App connected on port ${port}`)
})