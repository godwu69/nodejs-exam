const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true, min: 1 },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  major: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
