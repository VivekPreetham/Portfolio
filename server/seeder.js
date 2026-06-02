require('dotenv').config();
const mongoose = require('mongoose');

const Project = require('./models/Project'); 

const projectsData = [
  {
    title: "DocuMind",
    description: "A full-stack Retrieval-Augmented Generation (RAG) platform enabling semantic PDF Q&A. Built with a FastAPI microservice, FAISS vector indexing, and Groq-hosted LLM inference for low-latency, context-aware responses.",
    tags: ["React", "FastAPI", "FAISS", "LangChain"],
    github: "https://github.com/VivekPreetham/DocuMind",
    live: "#", 
    color: "#1D9E75"
  },
  {
    title: "ByteBrain",
    description: "An end-to-end educational platform that adapts content based on learner proficiency. It integrates an LLM-backed chatbot, candidate reranking architectures, and NLP pipelines to serve contextually relevant material at scale.",
    tags: ["Flutter", "Node.js", "MongoDB", "NLP"],
    github: "https://github.com/VivekPreetham/ByteBrain",
    live: "#",
    color: "#7F77DD"
  },
  {
    title: "Twitter Sentiment Analysis",
    description: "A multi-class sentiment analysis solution for noisy social media text. Leveraged a BiLSTM network with an attention mechanism and a comprehensive preprocessing pipeline to improve classification accuracy to 95%.",
    tags: ["Python", "TensorFlow", "BiLSTM", "NLP"],
    github: "https://github.com/VivekPreetham/Twitter-Sentiment-Analysis",
    live: "#",
    color: "#3B82F6"
  },
  {
    title: "MERN Portfolio Architecture",
    description: "A high-performance, animated developer portfolio featuring 3D tilt mechanics, glassmorphism UI, and an Express.js backend secured with rate-limiting and robust CORS configurations.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
    github: "https://github.com/VivekPreetham/Portfolio",
    live: "#https://portfolio-eight-sand-59.vercel.app/",
    color: "#F59E0B"
  },
  {
    title: "Smart Healthcare Platform",
    description: "A comprehensive digital health management system designed to streamline patient records, appointment scheduling, and hospital administration with secure JWT authentication and a distributed backend.",
    tags: ["MERN Stack", "REST APIs", "Express.js", "MongoDB"],
    github: "https://github.com/VivekPreetham/Smart-Healthcare-Management",
    live: "#",
    color: "#06B6D4"
  },
  {
    title: "Real-Time Face Detection",
    description: "A robust computer vision system capable of identifying and tracking facial features in real-time video streams utilizing Multi-Task Cascaded Convolutional Networks (MTCNN) and OpenCV.",
    tags: ["Python", "OpenCV", "MTCNN", "Computer Vision"],
    github: "https://github.com/VivekPreetham/Face-Detection",
    live: "#",
    color: "#EF4444"
  },
  {
    title: "Movie Recommender Engine",
    description: "A machine learning recommendation system utilizing content-based filtering and cosine similarity metrics to suggest contextually relevant films based on a user's specific viewing history and preferences.",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/VivekPreetham/Movie-recommendation-system",
    live: "#",
    color: "#10B981"
  },
  {
    title: "Facemash Rating Engine",
    description: "A full-stack Elo-rating based comparison application. Engineered with a scalable REST API backend deployed on Render and a responsive frontend to seamlessly handle concurrent user ranking requests.",
    tags: ["React", "Node.js", "Express", "Vercel"],
    github: "https://github.com/VivekPreetham/facemash",
    live: "#",
    color: "#EC4899"
  },
  {
    title: "AI Pitch Visualizer",
    description: "An AI-powered platform that transforms sales narratives into multi-panel visual storyboards. Engineered with a Next.js frontend and an asynchronous FastAPI backend, leveraging Llama 3.1 for intelligent prompt engineering and Flux Engine for stylistically consistent image generation.",
    tags: ["Next.js", "FastAPI", "Llama 3.1", "GenAI"],
    github: "https://github.com/VivekPreetham/Pitch-Visualizer",
    live: "#",
    color: "#8B5CF6"
  }
];

const seedDatabase = async () => {
  try {
    // 1. Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected...');

    // 2. Wipe the existing collection to prevent duplicates
    await Project.deleteMany();
    console.log('Old projects cleared...');

    // 3. Insert the new array
    await Project.insertMany(projectsData);
    console.log('All 9 Projects successfully seeded!');

    // 4. Exit the process successfully
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDatabase();