const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Store a student's face encoding
router.post("/store_face", async (req, res) => {
  try {
    const { studentID, name, faceEncoding, rfidTag } = req.body;
    const student = new Student({ studentID, name, faceEncoding, rfidTag });
    await student.save();
    res.json({ message: "Student face data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error saving face data" });
  }
});

// Get all face encodings (for live recognition)
router.get("/get_face_encodings", async (req, res) => {
  try {
    const students = await Student.find({}, "studentID faceEncoding");
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Error fetching face encodings" });
  }
});

module.exports = router;
