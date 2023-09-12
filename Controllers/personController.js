const Person = require("../model/person");
const getPerson = async (req, res) => {
  const { user_id } = req.params;
  try {
    const data = await Person.findOne({ _id: user_id });
    res.status(201).json({ status: "Success", message: data });
  } catch (error) {
    res.status(201).json({ status: "Failed", message: error });
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
    res.status(201).json({ status: "Failed", message: error });
  }
};
const postPerson = async (req, res) => {
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
    console.log(error);
    res.status(201).json({ status: "Failed", message: error });
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
    res.status(201).json({ status: "Failed", message: error });
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
    res.status(201).json({ status: "Failed", message: error });
  }
};
module.exports = {
  getPerson,
  getAllPersons,
  postPerson,
  updatePerson,
  deletePerson,
};
