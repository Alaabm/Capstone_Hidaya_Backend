const express = require('express');

const router = express.Router()

//Grab the controller functions
const {index, create, destroy, update} = require("../controllers/namesOfAllah");

//http://localhost:8080/namesOfAllah

//Get all names
router.get('/', index);

//Create a name
router.post('/', create);

//Put a name
router.put('/:id', update);

//Delete a name
router.delete('/:id', destroy);

module.exports = router;

//check sba for mongodb to fetch data!