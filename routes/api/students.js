const express = require("express");
const router = express.Router();
const studentsCtrl = require("../../controller/api/student");

router.post("/", studentsCtrl.createStudent);

module.exports = router; 