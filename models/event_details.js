const mongoose = require("mongoose");

const EventDetailSchema = new mongoose.Schema({
    name: {type: String},
    day: {type: Number},
    time: {type: String},
    location: {type: String},
    going: {type: Array},
    notes: {type: String}
});

module.exports = mongoose.model("EventInfo", EventDetailSchema)