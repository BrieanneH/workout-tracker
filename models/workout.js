//reference:
// https://www.youtube.com/watch?v=gmlm7W1PZMA&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=5&t=0s

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema 

const workoutSchema = new Schema ({
  day: {
    type: Date,
    default: Date.now

  },
  totalDuration: {
    type: Number,
    default: 0
  },

  exercises: [{
    type: { type : String},
    name: {type: String},
    weight: {type: Number},
    reps: {type: Number},
    sets: {type: Number},
    durantion: {type: Number},
    distance: {type: Number},
  }]
});


const workout = mongoose.model("Workout", workoutSchema);

module.exports = workout;
  