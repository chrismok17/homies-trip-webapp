const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8080

app.use(express.static(__dirname + "/public"))

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

app.listen(port, () => {
    console.log(`App connected on port ${port}`)
})