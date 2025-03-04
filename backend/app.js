const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const faceRoutes = require("./routes/face");
const attendanceRoutes = require("./routes/attendance");

const app = express();
app.use(express.json());
app.use(cors());

// Replace the connection string with your MongoDB URI
mongoose.connect("mongodb://localhost:27017/edutrack", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.log("MongoDB connection error: ", err));

app.use("/api/face", faceRoutes);
app.use("/api/attendance", attendanceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
