const express = require("express");
const mongoose = require("mongoose");

const PORT = 'mongodb+srv://Pw4jesse:Pw4jesse@cluster0.rrvso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || 3000;



const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect('mongodb+srv://Pw4jesse:Pw4jesse@cluster0.rrvso.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// routes
app.use(require("./routes/apiRoutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
