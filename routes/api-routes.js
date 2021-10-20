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

// POST request to the db
router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
    .then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// GET route for 'getWorkoutsInRange' function
router.get("/api/workouts/range", (req, res) => {
    db.find({})
    .then(dbData =>  {
        res.json(dbData);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// PUT route to update db
router.put("/api/workouts/:id", ({ body, params}, res) => {
    db.findByIdAndUpdate(params.id, { $push: { exercise: body } })
    .then(dbData => {
        res.json(dbData);
    })
    .catch(err => {
        res.status(400).json.apply(err);
    });
});

module.exports = router;