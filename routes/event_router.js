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

// Render the add event page
router.get("/add_event", (req, res) => {
    res.render("add_event")
});

// Renders the calendar page with all events
router.get("/calendar", async (req, res) => {
    let all_events = await Event.find().sort({"time": 1});
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.render("calendar", {all_events: all_events, days: days})
})

// all events with no day associated
router.get("/events", async (req, res) => {
    // let all_events = await Event.find().sort({"day": 1})
    let all_events = await Event.find({"day": ""}).sort({"name": 1})
    res.render("events", {all_events: all_events})

})

// Renders the day's details with all events for that day
router.get("/aug:day", async (req, res) => {
    let events = await Event.find({ day: req.params.day}).sort({"time": 1});
    res.render("day_details", { events: events, day: req.params.day})
})


// Renders and populates edit form with existing data
router.get("/aug:day/:id", async (req, res) => {
    let chosen_event = await Event.findById({ _id: req.params.id})
    res.render("edit_event", { id: req.params.id, name: chosen_event.name, day: chosen_event.day, time: chosen_event.time, location: chosen_event.location, going: chosen_event.going, notes: chosen_event.notes })
})

// After a new event is created, renders it's details
router.post("/event_details", (req, res) => {
    new_event(req, res)
})

// Update event entry
router.post("/:id/updated_event", async (req, res) => {
    let updated_event = await Event.findByIdAndUpdate({ _id: req.params.id },
    {
        name: req.body.name,
        day: req.body.day,
        time: req.body.time,
        location: req.body.location,
        going: req.body.going,
        notes: req.body.notes
    }, {new: true, upsert: false}  
    )
    console.log(updated_event.name)
    res.render("event_details", {id: updated_event._id, name: updated_event.name, day: updated_event.day, time: updated_event.time, location: updated_event.location, going: updated_event.going, notes: updated_event.notes})
})

// Delete an event
router.post("/:id/delete", async (req, res) => {
    let deleted_event = await Event.findByIdAndDelete({ _id: req.params.id })
    let all_events = await Event.find()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    res.render("calendar", {all_events: all_events, days: days})
})

module.exports = router