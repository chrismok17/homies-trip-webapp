const express = require("express");
const app = require("../app");
const path = require("path");

const router = express.Router();

const Event = require("../models/event_details");
const req = require("express/lib/request");
const res = require("express/lib/response");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

function new_event(req, res) {
    let event = new Event({
        name: req.body.name,
        day: req.body.day,
        time: req.body.time,
        location: req.body.location,
        going: req.body.going,
        notes: req.body.notes
    });
    event.save();
    // console.log(new_event)
    res.render("event_details", {name: event.name, day: event.day, time: event.time, location: event.location, going: event.going, notes: event.notes})
    
}

// All HTTP methods go here

router.get("/add_event", (req, res) => {
    res.render("add_event")
});

// router.get("/event_details", (req, res) => {
//     res.render("event_details")
// });

router.post("/event_details", (req, res) => {
    new_event(req, res)
})

module.exports = router