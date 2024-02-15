const Gem = require("../models/Gems.js");

async function index(req, res) {
  try {
    const gems = await Gem.find({});
    if (gems) {
      res.status(200).send(gems);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function create(req, res) {
  try {
    //req.body will have the info the user filled in the frontend
    const createdGem = await Gem.create(req.body);
    if (createdGem) {
      res.status(201).send(createdGem);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function update(req, res) {
  try {
    const updatedGem = await Gem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedGem) {
      res.status(202).send(updatedGem);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function destroy(req, res) {
  try {
    const deletedGem = await Gem.findByIdAndDelete(req.params.id);
    if (deletedGem) {
      res.status(201).send(deletedGem);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

//create delete request for the gem by id and password..

module.exports = {
  index,
  create,
  destroy,
  update,
};
