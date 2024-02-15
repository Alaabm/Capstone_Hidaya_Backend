// Requiring and configuring the .env file to access its variables 
require("dotenv").config();
// Requiring express
const express = require('express');
// Creating the express server and storing inside the app variable
const app = express();
// Port in which the server will run on 
const PORT = process.env.PORT || 8080;

const cors = require("cors");

//ADDED BY ME
const gemRouter = require("./routes/gems");
//ADDED BY ME
const namesOfAllahRouter = require("./routes/namesOfAllah");

// Configuring the server to accept and parse JSON data.
app.use(express.json());

app.use(cors());

//ADDED BY ME
// /gems
//connect the router//loads the controller/loads the model/loads mongoose from config(all connected)
app.use("/gems", gemRouter);
//ADDED BY ME
// /namesOfAllah
//connect the router//loads the controller/loads the model/loads mongoose from config(all connected)
app.use("/namesOfAllah", namesOfAllahRouter);


// Calling the listen function telling the server to listen on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})