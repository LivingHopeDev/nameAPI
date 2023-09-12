const Person = require("../model/person");
const { handleErrors } = require("../Middleware/errorHandler");
const getPerson = async (req, res) => {
  const { user_id } = req.params;
  try {
    const data = await Person.findOne({ _id: user_id });
    if (!data) {
      return res.status(404).json({ status: "Failed", message: "Not found" });
    }
    return res.status(201).json({ status: "Success", message: data });
  } catch (error) {
    const err = handleErrors(error);
    res.status(500).json({ status: "Failed", message: err });
  }
};
const getAllPersons = async (req, res) => {
  try {
    const data = await Person.find();
    if (data.length) {
      res.status(201).json({ status: "Success", message: data });
    } else {
      res.status(200).json({ status: "Success", message: "No name yet" });
    }
  } catch (error) {
    const err = handleErrors(error);
    res.status(500).json({ status: "Failed", message: err });
  }
};
const createPerson = async (req, res) => {
  const { name } = req.body;
  try {
    const personExist = await Person.findOne({ name });
    if (personExist) {
      return res
        .status(409)
        .json({ status: "Failed", message: "Name already exist" });
    }
    await Person.create({ name });
    res.status(201).json({ status: "Success", message: "Data saved" });
  } catch (error) {
    const err = handleErrors(error);
    res.status(500).json({ status: "Failed", message: err });
  }
};
const updatePerson = async (req, res) => {
  try {
    const data = await Person.findOneAndUpdate(
      { _id: req.params.user_id },
      req.body
    );
    if (data) {
      res.status(200).json({
        status: "Success",
        message: "Details Updated",
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Name not found",
      });
    }
  } catch (error) {
    const err = handleErrors(error);
    res.status(500).json({ status: "Failed", message: err });
  }
};
const deletePerson = async (req, res) => {
  const { user_id } = req.params;
  try {
    const personExist = await Person.findByIdAndDelete(user_id);
    if (personExist) {
      res.status(200).json({
        status: "Success",
        message: "Details deleted",
      });
    } else {
      res.status(404).json({
        status: "failed",
        message: "Name not found",
      });
    }
  } catch (error) {
    const err = handleErrors(error);
    res.status(500).json({ status: "Failed", message: err });
  }
};
module.exports = {
  getPerson,
  getAllPersons,
  createPerson,
  updatePerson,
  deletePerson,
};
