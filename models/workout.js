const mongoose = require('mongoose');

const { Schema } = mongoose;
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
            required: true,
            enum: ["resistance", "cardio"]
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: number,
            min: 0,
            required: true
        },
        weight: {
            type: number,
            min: 0,
            max: 500,
        },
        reps: {
            type: number,
            min: 0,
        },
        sets: {
            type: number,
            min: 0
        },
        distance: {
            type: number,
            min: 0
        }
    }
  ]
});

const Workout = mongoose.model('Workout', workOutSchema);

module.exports = Workout;