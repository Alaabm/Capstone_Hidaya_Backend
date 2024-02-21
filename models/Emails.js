const { Schema, model } = require("../config/db-connection");

const emailSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
    phone: {
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

module.exports = model("Email", emailSchema);