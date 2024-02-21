const { Schema, model } = require("../config/db-connection");

const emailSchema = new Schema(
  {
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
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