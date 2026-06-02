
export const infoCards = [
  { id: 1, label: "Location", value: "Hyderabad, Telangana 🇮🇳" },
  { id: 2, label: "Email", value: "vivekpreetham12@gmail.com" },
  { id: 3, label: "Degree", value: "B.Tech CSE — Data Science & Analytics, IIIT Nagpur (2023 – 2027)" },
  { id: 4, label: "Available For", value: "AI/ML Roles · Full Stack · Internships · Full-Time 2027" }
];

export const skillsData = [
  {
    id: "web",
    title: "Web Development",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "FastAPI", "Flask", "JWT", "REST APIs", "Microservices"]
  },
  {
    id: "ai",
    title: "Artificial Intelligence and Gen AI",
    skills: ["RAG", "Langchain", "Pinecone", "FAISSDB", "Vector DB", "NLP", "Transformers", "Prompt Engineering", "Groq", "LLM Integration", "Ollama", "context-aware retrieval"]
  },
  {
    id: "ml",
    title: "Machine Learning",
    skills: ["NumPy", "Pandas", "TensorFlow", "Keras", "Deep Learning", "PyTorch", "Scikit-learn", "Matplotlib & Seaborn", "Model Evaluation & Metrics", "OpenCV", "Attention Mechanism"]
  },
  {
    id: "data",
    title: "Data Science",
    skills: ["Tableau", "PowerBI", "Advanced Excel", "MySQL", "Python", "Matplotlib", "Exploratory Data Analysis", "Big Data", "Data Cleaning / Preprocessing"]
  }
];

export const educationData = [
  {
    id: 1,
    institution: "IIIT Nagpur",
    degree: "B.Tech Computer Science and Engineering with specialization in Data Science & Analytics",
    year: "2023 - 2027",
    score: "Active" 
  },
  {
    id: 2,
    institution: "Bhashyam Junior College",
    degree: "Class XII",
    year: "2021 - 2023",
    score: "Completed"
  },
  {
    id: 3,
    institution: "Bhashyam High School",
    degree: "Class X (SSC)",
    year: "2021",
    score: "Completed"
  }
];

export const fallbackProjects = [
  {
    _id: "1",
    title: "DocuMind",
    description: "A full-stack Retrieval-Augmented Generation (RAG) platform enabling semantic PDF Q&A. Built with a FastAPI microservice, FAISS vector indexing, and Groq-hosted LLM inference for low-latency, context-aware responses.",
    tags: ["React", "FastAPI", "FAISS", "LangChain"],
    github: "https://github.com/VivekPreetham/DocuMind",
    live: "#", 
    color: "#1D9E75" // accentTeal
  },
  {
    _id: "2",
    title: "ByteBrain",
    description: "An end-to-end educational platform that adapts content based on learner proficiency. It integrates an LLM-backed chatbot, candidate reranking architectures, and NLP pipelines to serve contextually relevant material at scale.",
    tags: ["Flutter", "Node.js", "MongoDB", "NLP"],
    github: "https://github.com/VivekPreetham/ByteBrain",
    live: "#",
    color: "#7F77DD" // accentPurple
  },
  {
    _id: "3",
    title: "Twitter Sentiment Analysis",
    description: "A multi-class sentiment analysis solution for noisy social media text. Leveraged a BiLSTM network with an attention mechanism and a comprehensive preprocessing pipeline to improve classification accuracy to 95%.",
    tags: ["Python", "TensorFlow", "BiLSTM", "NLP"],
    github: "https://github.com/VivekPreetham/Twitter-Sentiment-Analysis",
    live: "#",
    color: "#3B82F6" // Tech Blue
  },
  {
    _id: "4",
    title: "MERN Portfolio Architecture",
    description: "A high-performance, animated developer portfolio featuring 3D tilt mechanics, glassmorphism UI, and an Express.js backend secured with rate-limiting and robust CORS configurations.",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js"],
    github: "https://github.com/VivekPreetham/Portfolio",
    live: "#",
    color: "#F59E0B" // Amber
  },
  {
    _id: "5",
    title: "Smart Healthcare Platform",
    description: "A comprehensive digital health management system designed to streamline patient records, appointment scheduling, and hospital administration with secure JWT authentication and a distributed backend.",
    tags: ["MERN Stack", "REST APIs", "SQL", "MongoDB"],
    github: "https://github.com/VivekPreetham/Smart-Healthcare-Management",
    live: "#",
    color: "#06B6D4" // Cyan
  },
  {
    _id: "6",
    title: "Real-Time Face Detection",
    description: "A robust computer vision system capable of identifying and tracking facial features in real-time video streams utilizing Multi-Task Cascaded Convolutional Networks (MTCNN) and OpenCV.",
    tags: ["Python", "OpenCV", "MTCNN", "Computer Vision"],
    github: "https://github.com/VivekPreetham/Face-Detection",
    live: "#",
    color: "#EF4444" // Red
  },
  {
    _id: "7",
    title: "Movie Recommendation Engine",
    description: "A machine learning recommendation system utilizing content-based filtering and cosine similarity metrics to suggest contextually relevant films based on a user's specific viewing history and preferences.",
    tags: ["Python", "Scikit-learn", "Pandas", "Streamlit"],
    github: "https://github.com/VivekPreetham/Movie-recommendation-system",
    live: "#",
    color: "#10B981" // Emerald
  },
  {
    _id: "8",
    title: "Facemash Rating Engine",
    description: "A full-stack Elo-rating based comparison application. Engineered with a scalable REST API backend deployed on Render and a responsive frontend to seamlessly handle concurrent user ranking requests.",
    tags: ["React", "Node.js", "MongoDB", "Vercel"],
    github: "https://github.com/VivekPreetham/facemash",
    live: "#",
    color: "#EC4899" // Pink
  },
  {
    _id: "9",
    title: "AI Pitch Visualizer",
    description: "An AI-powered platform that transforms sales narratives into multi-panel visual storyboards. Engineered with a Next.js frontend and an asynchronous FastAPI backend, leveraging Llama 3.1 for intelligent prompt engineering and Flux Engine for stylistically consistent image generation.",
    tags: ["Next.js", "FastAPI", "Llama 3.1", "GenAI"],
    github: "https://github.com/VivekPreetham/Pitch-Visualizer",
    live: "#",
    color: "#8B5CF6" // Violet
  }
];

export const servicesData = [
  {
    id: "01",
    title: "Web Development",
    description: "I build full-stack MERN applications with production-ready architecture — JWT auth, MongoDB Atlas persistence, RESTful APIs, and React frontends."
  },
  {
    id: "02",
    title: "AI Systems Development",
    description: "I integrate LLMs into real applications — building document intelligence platforms, AI-powered learning systems, and NLP pipelines."
  },
  {
    id: "03",
    title: "System Architecture Design",
    description: "I design distributed systems with clean separation of concerns — REST APIs, JWT-secured routes, cloud databases, and AI inference services working together in scalable architectures."
  },
  {
    id: "04",
    title: "Machine Learning & Optimization",
    description: "From TensorFlow and PyTorch model training to NLP preprocessing pipelines, I build ML systems focused on measurable results — reduced misclassification, improved accuracy, production deployment."
  }
];