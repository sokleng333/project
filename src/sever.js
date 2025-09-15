
// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Fake in-memory storage
let attendance = [];
let leaveRequests = [];

// ✅ Check In
app.post("/checkin", (req, res) => {
  const { time } = req.body;
  if (!time) return res.status(400).json({ message: "Time is required" });

  const record = { id: attendance.length + 1, type: "Check In", time };
  attendance.push(record);

  res.json({ message: "Check-in recorded", record });
});

// ✅ Check Out
app.post("/checkout", (req, res) => {
  const { time } = req.body;
  if (!time) return res.status(400).json({ message: "Time is required" });

  const record = { id: attendance.length + 1, type: "Check Out", time };
  attendance.push(record);

  res.json({ message: "Check-out recorded", record });
});

// ✅ Get Attendance
app.get("/attendance", (req, res) => {
  res.json(attendance);
});

// ✅ Submit Leave
app.post("/leave", (req, res) => {
  const { name, start_date, end_date, reason, request_time } = req.body;
  if (!name || !start_date || !end_date || !reason || !request_time) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const leave = {
    id: leaveRequests.length + 1,
    name,
    start_date,
    end_date,
    reason,
    request_time,
    status: "Pending",
  };
  leaveRequests.push(leave);

  res.json({ message: "Leave request submitted", leave });
});

// ✅ Get Leave Requests
app.get("/leave", (req, res) => {
  res.json(leaveRequests);
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.post("/api/checkin", (req, res) => {
  console.log("Check In:", req.body);
  res.json({ status: "success", type: "checkin" });
});

app.post("/api/checkout", (req, res) => {
  console.log("Check Out:", req.body);
  res.json({ status: "success", type: "checkout" });
});


app.post("/api/leave", (req, res) => {
  console.log("Leave request received:", req.body);
  res.json({ status: "success", type: "leave" });
});

