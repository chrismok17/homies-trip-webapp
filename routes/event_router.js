const express = require("express");
const res = require("express/lib/response");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const bodyparser = require("body-parser")

const router = express.Router();

const Event = require("../models/event_details");

router.use(bodyparser.json());
router.use(bodyparser.urlencoded({ extended: true }));

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
};

async function edit_event(req, res) {
    let event = await Event.findByIdAndUpdate({
        _id: req.body.id
    }, {
        name: req.body.name,
        day: req.body.day,
        time: req.body.time,
        location: req.body.location,
        going: req.body.going,
        notes: req.body.notes
    }, {new: true})
    event.save()
    res.render("event_details", {name: event.name, day: event.day, time: event.time, location: event.location, going: event.going, notes: event.notes})
}

// All HTTP methods go here

router.get("/add_event", (req, res) => {
    res.render("add_event")
});

router.get("/calendar", async (req, res) => {
    let all_events = await Event.find()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.render("calendar", {all_events: all_events, days: days})
})

router.get("/aug:day", async (req, res) => {
    let events = await Event.find({ day: req.params.day});
    res.render("day_details", { events: events, day: req.params.day})
})


router.get("/aug:day/:id", async (req, res) => {
    let chosen_event = await Event.findById({ _id: req.params.id})
    res.render("edit_event", { name: chosen_event.name, day: chosen_event.day, time: chosen_event.time, location: chosen_event.location, going: chosen_event.going, notes: chosen_event.notes })
})

router.post("/event_details", (req, res) => {
    new_event(req, res)
})

module.exports = router