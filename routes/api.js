//acquiring routes andm making connection to models/workout.js
const router = require("express").Router();
const workout = require("../models/workout");

//creating methods
//ccalling out router to 

//creating new workout 
router.post("/api/workouts",({ body }, res)=> {
  console.log("sucessful");
  workout.create({})
  .then(addWorkout =>{
    console.log(addWorkout)
    res.json(addWorkout);
  })
  .catch(err => {
    res.json(400).json(err);
  });
});

router.put("/api/workout/:id", ({ body, params}, res)=>{
  //using mongo methods to update and modify feilds
  workout.findByIdaAndUpdate(params.id, {$inc: {totalDuration: body.
    duration}, $push: { exercises: body}}, { new : true} )
    .then(addWokout => {
      console.log(addWokout);
      res.json(addWokout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res)=>{
  workout.find({})
    .then(addWokout =>{
      res.json(addWokout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range",(req,res)=>{
  workout.find({}).limit(7)
  .then(addWokout =>{
    res.json(addWokout);
  })
  .catch(err => {
    res.status(400).json(err);
  });
});

module.exports = router;