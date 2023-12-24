const mongoose = require("mongoose");

const hostelSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  sign: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Hostel = mongoose.model("Hostel", hostelSchema);
module.exports = Hostel;
