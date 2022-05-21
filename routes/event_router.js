const express = require("express");
const app = require("../app");
const path = require("path");

const EventRouter = express.Router();

const Event = require("../models/event_details");

EventRouter.use(express.json());
EventRouter.use(express.urlencoded({ extended: true }));

// All HTTP methods go here

module.exports = EventRouter