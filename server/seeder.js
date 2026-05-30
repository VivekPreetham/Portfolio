require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const connectDB = require('./config/db');

// Your 6 sample projects from the blueprint
const sampleProjects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with user authentication, shopping cart, and integrated Stripe payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce-demo.com",
    color: "#7F77DD" // Purple
  },
  {
    title: "Real-Time Chat App",
    description: "Instant messaging application featuring persistent chat rooms, private messaging, and typing indicators.",
    tags: ["React", "Express", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
    live: "https://your-chat-demo.com",
    color: "#1D9E75" // Teal
  },
  {
    title: "Disease Prediction System",
    description: "An intelligent diagnostic tool using trained machine learning models to predict disease likelihood based on symptoms.",
    tags: ["Python", "Flask", "Machine Learning", "React"],
    github: "https://github.com/yourusername/disease-predictor",
    live: "https://your-ml-demo.com",
    color: "#F59E0B" // Amber
  },
  {
    title: "Student Management System",
    description: "A comprehensive dashboard for academic institutions to track student enrollment, grades, and attendance.",
    tags: ["React", "Node.js", "MySQL", "Express"],
    github: "https://github.com/yourusername/student-management",
    live: "https://your-sms-demo.com",
    color: "#3B82F6" // Blue
  },
  {
    title: "Portfolio Website",
    description: "A visually stunning personal portfolio featuring 3D tilt effects, GSAP scroll animations, and a secure backend API.",
    tags: ["React", "Express", "MongoDB", "GSAP"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://your-portfolio.com",
    color: "#EC4899" // Pink
  },
  {
    title: "Weather Dashboard",
    description: "A dynamic weather application providing real-time forecasting, interactive maps, and historical data visualization.",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://your-weather-demo.com",
    color: "#8B5CF6" // Violet
  }
];

const importData = async () => {
  try {
    await connectDB(); // Connect to MongoDB

    // Clear existing data to prevent duplicates if you run this multiple times
    await Project.deleteMany(); 
    console.log('Existing projects cleared.');

    // Insert the new sample data
    await Project.insertMany(sampleProjects);
    console.log('Sample projects successfully inserted!');

    process.exit();
  } catch (error) {
    console.error(`Error importing data: ${error.message}`);
    process.exit(1);
  }
};

importData();