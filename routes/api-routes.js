// Import express router
const router = require("express").Router();

// Import workout model
const db = require("../models/exercise");

// GET request for all workouts
router.get("/api/workouts", (req, res) => {
    db.find({})
    .then(dbData =>  {
        res.json(dbData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// POST request 
router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
    .then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});