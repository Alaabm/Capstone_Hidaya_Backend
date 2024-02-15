const NameOfAllah = require("../models/NamesOfAllah.js");

async function index(req, res) {
  try {
    const namesOfAllah = await NameOfAllah.find({});
    if (namesOfAllah) {
      res.status(200).send(namesOfAllah);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function create(req, res) {
  try {
    //req.body will have the info the user filled in the frontend
    const createdNameOfAllah = await NameOfAllah.create(req.body);
    if (createdNameOfAllah) {
      res.status(201).send(createdNameOfAllah);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function update(req, res) {
  try {
    const updatedNameOfAllah = await NameOfAllah.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (updatedNameOfAllah) {
      res.status(202).send(updatedNameOfAllah);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function destroy(req, res) {
  try {
    const deletedNameOfAllah = await NameOfAllah.findByIdAndDelete(
      req.params.id
    );
    if (deletedNameOfAllah) {
      res.status(201).send(deletedNameOfAllah);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

module.exports = {
  index,
  create,
  destroy,
  update,
};
