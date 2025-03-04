const mongoose = require("mongoose")

const attendanceSchema = new mongoose.Schema({
  date: { type: String, required: true },
  status: { type: String, enum: ["Present", "Absent"], required: true }
});
// date: { type: Date, default: Date.now }

// studentSchema.index({ studentID: 1, rfidTag: 1 });

const studentSchema = new mongoose.Schema({
  studentID: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  faceEncoding: { type: [Number], required: true },
  rfidTag: { type: String, unique: true },
  attendance: [attendanceSchema]
});
