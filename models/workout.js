//reference https://www.youtube.com/watch?v=gmlm7W1PZMA&list=PL4cUxeGkcC9jpvoYriLI0bY8DOgWZfi6u&index=5&t=0s

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema 

const workoutSchema = new Schema ({
  day: {
    type: Date,
    default: () => Date ()

  },
  totalDuration: {
    type: Number,
    default: 0
  },
  exercise:
  [
    {
      type:{
        type: String,
        trim: true
      },

      name: {
        type: String,
        trim: true,
        required: "Enter exercise name"

      },

      duration: {
        type: Number,
        require: "Enter duration"
      },
      weight: {
        type: Number,
        require: "enter amount of wight used"
      },
      reps: {
        type: Number,
        require: "enter the amount of reps completed"
      },
      sets:{
        type: Number,
        require: "enter amount od sets completed"

      },
      distance: {
        type: Number,
        require: "enter distance completed"
      }


    }
  ]
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
  