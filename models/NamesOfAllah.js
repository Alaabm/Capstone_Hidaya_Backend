const { Schema, model } = require("../config/db-connection");

const namesOfAllahSchema = new Schema(
  {
    "#": {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    Transliteration: {
      type: String,
      required: true,
    },
    meaning: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Name of Allah", namesOfAllahSchema);
