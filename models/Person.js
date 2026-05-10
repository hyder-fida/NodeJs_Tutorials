const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define a schema for the Person collection

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
  },

  mobile: {
    type: String,
    required: true,
  },

  work: {
    type: String,
    enum: ["chef", "waiter", "manager"],
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  address: {
    type: String,
  },

  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});


// HASH PASSWORD BEFORE SAVING
personSchema.pre("save", async function (next) {

  const person = this;

  // hash only if password modified
  if (!person.isModified("password")) return next();

  try {

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(
      person.password,
      salt
    );

    person.password = hashedPassword;

    next();

  } catch (error) {
    next(error);
  }
});


// COMPARE PASSWORD METHOD
personSchema.methods.comparePassword = async function (
  candidatePassword
) {

  try {

    const isMatch = await bcrypt.compare(
      candidatePassword,
      this.password
    );

    return isMatch;

  } catch (error) {
    throw error;
  }
};

const Person = mongoose.model("Person", personSchema);

module.exports = Person;