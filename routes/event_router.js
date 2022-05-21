const express = require("express");
const res = require("express/lib/response");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const router = express.Router();

const Event = require("../models/event_details");

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

// function get_all_events () {
//     let all_events = Event.find()
//     return all_events
// }

// All HTTP methods go here

router.get("/add_event", (req, res) => {
    res.render("add_event")
});

router.get("/calendar", async (req, res) => {
    let all_events = await Event.find()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.render("calendar", {all_events: all_events, days: days})
})

router.post("/event_details", (req, res) => {
    new_event(req, res)
})

module.exports = router