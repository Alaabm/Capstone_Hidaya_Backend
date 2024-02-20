const { Schema, model } = require("../config/db-connection");

const gemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = model("Message", gemSchema);
