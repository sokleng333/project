// server.js
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // allow Vue frontend
app.use(express.json()); // parse JSON requests

let attendance = [];
let leaveRequests = [];

// ✅ Check In
app.post("/checkin", (req, res) => {
  const record = {
    id: Date.now(),
    type: "checkin",
    time: new Date().toLocaleTimeString()
  };
  attendance.push(record);
  res.json({ message: "Checked in!", record });
});

// ✅ Check Out
app.post("/checkout", (req, res) => {
  const record = {
    id: Date.now(),
    type: "checkout",
    time: new Date().toLocaleTimeString()
  };
  attendance.push(record);
  res.json({ message: "Checked out!", record });
});

// ✅ Leave Request
app.post("/leave", (req, res) => {
  const leave = {
    id: Date.now(),
    date: new Date().toLocaleDateString(),
    status: "Pending"
  };
  leaveRequests.push(leave);
  res.json({ message: "Leave requested!", leave });
});

// ✅ Get all attendance
app.get("/attendance", (req, res) => {
  res.json(attendance);
});

// ✅ Get all leave requests
app.get("/leave", (req, res) => {
  res.json(leaveRequests);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

