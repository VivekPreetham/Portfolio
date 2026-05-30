const Project = require('../models/Project');

const getProjects = async (req, res, next) => {
  try {
    // Fetch all projects, sorted by newest first
    const projects = await Project.find({}).sort({ createdAt: -1 });
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    next(error); // Pass any DB errors to your global errorHandler
  }
};

module.exports = { getProjects };