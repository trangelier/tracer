const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Semester Schema
const SemesterSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  year: {
    type: Number,
    required: true
  },
  name: { type: String, required: true },
  assignments: [{ type: Schema.Types.ObjectId, ref: 'Assignment' }]
});

const Semester = (module.exports = mongoose.model('Semester', SemesterSchema));
