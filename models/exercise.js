// import Mongoose
const mongoose = require("mongoose")

// Create variable for Exercise model 
const Schema = mongoose.Schema;

// Workout Schema
const ExerciseSchema = new Schema({
    day: {
        type: Date, 
        default: () => new Date(),
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
            },
            totalDuration: {
                type: Number, 
                default: 0
            }
        }
    ]
})

// save schema to variable and access via mongoose
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

