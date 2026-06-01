// client/src/utils/data.js

export const infoCards = [
  { id: 1, label: "Location", value: "Hyderabad, India" },
  { id: 2, label: "Email", value: "vivekpreetham12@gmail.com" }, // Replace with your actual email
  { id: 3, label: "Degree", value: "B.Tech CSE specialization in Data Science & Analytics" },
  { id: 4, label: "Available For", value: "Open Opportunities & Internship" }
];

export const skillsData = [
  {
    category: "Languages & Frameworks",
    skills: [
      { name: "JavaScript", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React.js", level: 5, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Node.js", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Python", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Flask", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" }
    ]
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MongoDB", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", level: 4, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Vercel / Render", level: 4, icon: "https://img.icons8.com/ios-filled/50/7F77DD/cloud-hosting.png" }
    ]
  },
  {
    category: "CS Fundamentals & AI",
    skills: [
      { name: "DBMS & OS", level: 4, icon: "https://img.icons8.com/ios/50/1D9E75/database.png" },
      { name: "System Design", level: 3, icon: "https://img.icons8.com/ios/50/7F77DD/flow-chart.png" },
      { name: "RAG Architecture", level: 4, icon: "https://img.icons8.com/ios/50/1D9E75/artificial-intelligence.png" }
    ]
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
    title: "Weekend Knocks Platform",
    description: "A competitive esports tournament platform with user registration, live brackets, and team management features.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    live: "#",
    color: "#7F77DD"
  },
  {
    title: "AI-Powered Student Portal",
    description: "An intelligent academy management assistant using a Flask backend and RAG vector databases for instant knowledge retrieval.",
    tags: ["Flask", "Python", "RAG", "React"],
    github: "#",
    live: "#",
    color: "#1D9E75"
  },
  {
    title: "E-Commerce Architecture",
    description: "Full-featured online store with secure authentication, shopping cart state management, and integrated payments.",
    tags: ["MERN Stack", "Redux", "Stripe"],
    github: "#",
    live: "#",
    color: "#a855f7"
  },
  {
    title: "TantraFiesta Bug Tracker",
    description: "An issue tracking and vulnerability management dashboard inspired by Jira, built to manage bug bounty reports.",
    tags: ["React", "Express", "MongoDB"],
    github: "#",
    live: "#",
    color: "#3B82F6"
  },
  {
    title: "Agentic Digital Assistant",
    description: "A simulated digital sales assistant built for BFSI scenarios, capable of human-like loan sales processing.",
    tags: ["Python", "LLMs", "FastAPI"],
    github: "#",
    live: "#",
    color: "#F59E0B"
  },
  {
    title: "Real-Time Chat App",
    description: "Instant messaging application featuring persistent chat rooms and real-time event broadcasting.",
    tags: ["React", "Socket.io", "Express"],
    github: "#",
    live: "#",
    color: "#EC4899"
  }
];

// client/src/utils/data.js

export const servicesData = [
  {
    id: "01",
    title: "Web Development",
    description: "I build scalable full-stack applications with modern frameworks and production-ready architecture."
  },
  {
    id: "02",
    title: "AI Systems Development",
    description: "I design and integrate LLM-powered systems, RAG pipelines, and intelligent automation workflows."
  },
  {
    id: "03",
    title: "System Architecture Design",
    description: "I architect robust APIs, scalable backend systems, and structured data-driven platforms."
  },
  {
    id: "04",
    title: "Machine Learning & Optimization",
    description: "I build predictive models, time-series systems, and constraint optimization solutions."
  }
];