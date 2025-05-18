

const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true
  },
  start: {
    type: String
  },
  end: {
    type: String
  }
});

const jobPostSchema = new mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  jobDescription: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  aboutus: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  subcategory: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  schedule: {
    type: [scheduleSchema],
    default: []
  }
}, { timestamps: true });
 const jobpost =  mongoose.model('JobPost', jobPostSchema);

module.exports = jobpost

