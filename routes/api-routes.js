// Import workout model
const db = require("../models");

module.exports = (app) => {

    // GET request for all workouts
    app.get("/api/workouts", (req, res) => {
    db.Exercise.find({}, (err, data) => {
            if(err){
            console.log(err);
            } else {
            res.json(data)
            }
        });
    });

    app.get("/api/workouts", (req, res) => {
        db.Exercise.aggregate([
            {
              $addFields: {
                totalDuration: { $sum: "$duration" }
              }
            }
        ])
    });

    // PUT route to update db: add exercise, grab id parameter, push to model
    app.put("/api/workouts/:id", ({ body, params}, res) => {
        db.Exercise.findOneAndUpdate({ _id: params.id}, 
                                    {$push: {exercises: body}},
                                    updatedWorkout => {
                                    res.json(updatedWorkout);
        });
    });

    // POST request to the db
    app.post("/api/workouts", (req, res) => {
        db.Exercise.create({}).then(newWorkout => {
            res.json(newWorkout);
        });
    });

    // GET route for 'getWorkoutsInRange' function
    app.get("/api/workouts/range", (req, res) => {
        db.Exercise.find({}, (err, data) => {
            if(err){
            console.log(err);
            } else {
            res.json(data)
            }
        });
    });

};