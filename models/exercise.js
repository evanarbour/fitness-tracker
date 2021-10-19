// import Mongoose
const mongoose = require("mongoose")

// Create variable for Workout model 
const Schema = mongoose.Schema;


const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: Date.now()
    }, 
    exercises: [
        {
            name: {
                type: String, 
                trim: true,
                required: "Please enter Exercise Name"
            }, 
            type: {
                type: String, 
                trim: true, 
                required: "Please enter Exercise Type"
            }, 
            duration: {
                type: Number,
                required: "Please enter Exercise Duration"
            }, 
            distance: {
                type: Number
            },
            weight: {
                type: Number
            }, 
            sets: {
                type: Number
            }, 
            reps: {
                type: Number
            }
        }
    ]
})


const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

