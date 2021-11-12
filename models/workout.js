const mongoose = require('mongoose');

const { Schema } = mongoose;

const workoutSchema = new Schema({
    // look at seed.js for whats needed //
  name: {
    type: String,
    trim: true,
    required: 'Enter a name for transaction',
  },
  value: {
    type: Number,
    required: 'Enter an amount',
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model('Workout', workOutSchema);

module.exports = Workout;