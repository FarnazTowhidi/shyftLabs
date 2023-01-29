const Student = require("../../models/student");

//Create student
async function createStudent(req, res) {
  console.log("farnaz error")
    try {
      console.log("farnaz")
      const message = await Student.create(req.body);
      console.log("farnaz")
      res.status(200).json(message);
    } catch (error) {
      
      res.status(500).json(error);
    }
  }

async function index(req, res) {
  try {
    const students = await Student.find({})
    res.status(200).json(students)
  } catch (err) {
    res.status(500).json(err)
  }
}

  module.exports = {
    createStudent,
    index
  };
  
// Delete student
