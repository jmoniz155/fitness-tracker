const db = require("../models");
 
module.exports = function (app) {
 
   //api.js uses this to get the last workout
   app.get("/api/workouts", (req, res) => {
       db.Workout.find({})
           .then(workout => {
               res.json(workout);
           })
           .catch(err => {
               res.json(err);
           });
   });
 
   //Generates a new workout in the database
   app.post("/api/workouts", async (req, res) => {
       try {
           const response = await db.Workout.create({ type: "workout" })
           res.json(response);
       }
       catch (err) {
           console.log("Workout not created: ", err)
       };
   });
 
   //api.js calls to add an exercise to the workout session, creates the id
   app.put("/api/workouts/:id", ({ body, params }, res) => {
       console.log(body, params);
       const workoutId = params.id;
       let savedExercises = [];
 
       //list of all current exercises in current workout session
       db.Workout.find({ _id: workoutId })
           .then(dbWorkout => {
               //console.log(dbWorkout);
               savedExercises = dbWorkout[0].exercises;
               res.json(dbWorkout[0].exercises);
               let allExercises = [...savedExercises, body]
               console.log(allExercises)
               updateWorkout(allExercises)
           })
           .catch(err => {
               res.json(err);
           });
 
       function updateWorkout(exercises) {
           db.Workout.findByIdAndUpdate(workoutId, { exercises: exercises }, function (err, doc) {
               if (err) {
                   console.log(err)
               }
           })
       };
 
   });
 
   app.get("/api/workouts/range", (req, res) => {
       db.Workout.find({})
           .then(workout => {
               res.json(workout);
           })
           .catch(err => {
               res.json(err);
           });
   });
};
