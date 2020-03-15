//setting up connections

const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const PORT = process.env.PORT|| 3000;
const workoutModel = require("./models/workout");
const db = require('./models');
const path = require('path')
require('dotenv').config()

const app = express();

//when extended is set as true
app.use(express.urlencoded ({ extended: true}));
app.use(express.json());

app.use(express.static("public"));


//brings in mongo/unqiue exercises 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(morgan('tiny'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"/public/index.html"));
})

app.get("/exercise", (req,res) =>{
    res.sendFile(path.join(__dirname, "/public/exercise.html"));

});
app.get("/stats", (req,res) =>{
    res.sendFile(path.join(__dirname, "/public/stats.html"));

});
app.post("/api/workouts",(req, res)=> {
    console.log(req.body);
    const work = new workoutModel({})
    workoutModel.create(work)
    .then(addWorkout =>{
      console.log(work)
      res.json(addWorkout);
    })
    .catch(err => {
      res.send(err);
    });
  });
  
  app.put("/api/workout/:id", ({ body, params}, res)=>{
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
  
  app.get("/api/workout", (req, res)=>{
    db.workout.find({})
      .then(getWokout =>{
        res.json(getWokout);
      })
      .catch(err => {
        console.log(err);
        res.status(400).send(err);
      });
  });
  
  app.get("/api/workout/range",(req,res)=>{
    workout.find().sort({ day: -1 }).limit(7)
    .then(addWokout =>{
      res.json(addWokout);
    })
    .catch(err => {
      res.status(400).send(err);
    });
  });
  
  module.exports = app;

app.listen(PORT, () => {
    console.log(`App currently running on http://localhost:${PORT}`);
});