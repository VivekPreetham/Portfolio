const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required']
  },
  tags: {
    type: [String], // Array of strings for your colored tech stack pills
    required: true
  },
  github: {
    type: String,
    default: '#'
  },
  live: {
    type: String,
    default: '#'
  },
  color: {
    type: String,
    default: '#7F77DD' // Default to your accent purple if no color is provided
  }
}, { 
  timestamps: true 
});

module.exports = mongoose.model('Project', projectSchema);