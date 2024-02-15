const { Schema, model } = require("../config/db-connection");

const gemSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    topic: {
      type: String,
      required: true,
    },
    gem: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Gem", gemSchema);
