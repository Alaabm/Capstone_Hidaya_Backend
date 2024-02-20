const express = require('express');

const router = express.Router()

//Grab the controller functions
const {index, create, destroy, update} = require("../controllers/gems");

//http://localhost:8080/gems

//Get all gems
router.get('/', index);

//Create a gem
router.post('/', create);

//Put a gem
router.put('/:id', update);

//Delete a gem
router.delete('/:id', destroy);

//Delete a single data entry
// router.delete("/:id", async (req, res) => {
//     let collection = await db.collection('gems');
//     let query = {_id: new ObjectId(req.params.id)};
//     let result = await collection.deleteOne(query);
  
//     if (!result) res.send ("Not Found").status(404)
//     else res.send(result).status(200);
//   });

module.exports = router;