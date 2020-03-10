const router = require("express").Router();
const mongojs= require("mongojs");
const path = require("path");

//importing models


const db = require("../models");
const workout = require("../models/workout");

//html route

router.get('/exercise', fucntionm (req))