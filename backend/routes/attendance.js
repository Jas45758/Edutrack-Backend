const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Mark attendance for a student
router.post("/mark_attendance", async (req, res) => {
  try {
    const { studentID, date, status } = req.body;
    await Student.updateOne(
      { studentID },
      { $push: { attendance: { date, status } } }
    );
    res.json({ message: "Attendance marked successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error marking attendance" });
  }
});

// Retrieve attendance records for a student
router.get("/get_attendance/:studentID", async (req, res) => {
  try {
    const student = await Student.findOne(
      { studentID: req.params.studentID },
      "attendance"
    );
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving attendance" });
  }
});

module.exports = router;
