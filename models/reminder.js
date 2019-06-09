const mongoose = require('mongoose');

// Reminder Schema
const ReminderSchema = mongoose.Schema({
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
  email: {
    type: String,
    required: true
  }
});

const Reminder = (module.exports = mongoose.model('Reminder', ReminderSchema));
