const Gem = require("../models/Messages.js");

async function index(req, res) {
  try {
    const messages = await Message.find({});
    if (messages) {
      res.status(200).send(messages);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function create(req, res) {
  try {
    //req.body will have the info the user filled in the frontend
    const createdMessage = await Gem.create(req.body);
    if (createdMessage) {
      res.status(201).send(createdMessage);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function update(req, res) {
  try {
    const createdMessage = await Gem.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedMessage) {
      res.status(202).send(updatedMessage);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function destroy(req, res) {
  try {
    const deletedMessage = await Message.findByIdAndDelete(req.params.id);
    if (deletedMessage) {
      res.status(201).send(deletedMessage);
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
