const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Assignment Schema
const AssignmentSchema = mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  name: {
    type: String,
    required: true
  },
  due_date: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  reminders: [{ type: Schema.Types.ObjectId, ref: 'Reminder' }]
});

const Assignment = (module.exports = mongoose.model(
  'Assignment',
  AssignmentSchema
));
