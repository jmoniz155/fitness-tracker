const router = require('express').Router();
const Workout = require('../models/workout.js');

// get route: get an array of all workouts
router.get('/api/workout', ({ body }, res) => {
  Workout.find (body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// get route: get range of workouts
router.get('/api/workout/range', ({ body }, res) => {
  Workout.find (body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// post route: create workout
router.post('/api/workout', ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// post route: create many workouts
router.post('/api/workout', ({ body }, res) => {
  Workout.insertMany(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;