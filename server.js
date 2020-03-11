//setting up connections

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT|| 3000;

const app = express();

//when extended is set as true
app.use(express.urlencoded ({ extended: true}));
app.use(express.json());

app.use(express.static("public"));


//brings in mongo/unqiue exercises 
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(require("./routes/api.js"));
app.use(require("./routes/routes.js"));

app.listen(PORT, () => {
    console.log(`App currently running on ${PORT}!`);
});