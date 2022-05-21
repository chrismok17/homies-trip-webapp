const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"))

app.set("view engine", "ejs");

app.use("/", (req, res) => {
    res.render("home")
})

app.listen(port, () => {
    console.log(`App connected on port ${port}`)
})