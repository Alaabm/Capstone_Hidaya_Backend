const Email = require("../models/Emails.js");

async function index(req, res) {
  try {
    const emails = await Email.find({});
    if (emails) {
      res.status(200).send(emails);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function create(req, res) {
  try {
    //req.body will have the info the user filled in the frontend
    const createdEmail = await Email.create(req.body);
    if (createdEmail) {
      res.status(201).send(createdEmail);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function update(req, res) {
  try {
    const updatedEmail = await Email.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedEmail) {
      res.status(202).send(updatedEmail);
    }
  } catch (err) {
    res.status(400).send(err);
  }
}

async function destroy(req, res) {
  try {
    const deletedEmail = await Email.findByIdAndDelete(req.params.id);
    if (deletedEmail) {
      res.status(201).send(deletedEmail);
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
