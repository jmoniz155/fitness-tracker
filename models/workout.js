const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// create database
const workoutSchema = new Schema({
    // look at seed.js for whats needed //
    day: {
        type: Date,
        default: Date.now,
        required: true,
    },
    excercises: [
        {
            excerciseType: {
                type: String,
                required: "required",
                enum: ["resistance", "cardio"]
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                min: 0
            },
            weight: {
                type: Number,
                min: 0,
                max: 500
            },
            reps: {
                type: Number,
                min: 0,
            },
            sets: {
                type: Number,
                min: 0
            },
            distance: {
                type: Number,
                min: 0
            }
        }
    ]
});

workoutSchema.virtual("totalDuration").get(function () {
    //Reduces the array of exercises down to the sum of the durations
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});


const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;