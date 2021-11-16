const router = require("express").Router();
const Workout = require("..models/workout.js");
const path = require("path");

 
router.post("/api/workouts", (req, res) => {
  Workout.create(req)
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("./exercise", (req, res) => {
  res
    .sendFile("../public/exercise.html");
    });

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put(`/api/workouts/:id`, (req, res) => {
    Workout.updateOne(req.params.id)
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  
module.exports = router;