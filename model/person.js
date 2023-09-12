const mongoose = require("mongoose");

const Schema = mongoose.Schema;

personSchema = new Schema({
  name: { type: String, unique: true, lowercase: true, trim: true },
});

const Person = mongoose.model("Person", personSchema);

module.exports = Person;
