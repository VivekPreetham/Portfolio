# Vivek Preetham | Full-Stack AI Developer Portfolio

> **Building intelligent systems at the intersection of AI and full-stack engineering.**

A high-performance, dynamic developer portfolio built on the **MERN Stack** (MongoDB, Express, React, Node.js). This project serves not just as a static resume, but as a fully functional, database-driven web application featuring 3D tilt mechanics, glassmorphism UI design, and a robust REST API.

🔗 **[View Live Demo](#)** *(https://portfolio-eight-sand-59.vercel.app/)*

---

## Key Features

* **Dynamic Data Rendering:** The "Featured Projects" section is powered by a live MongoDB database, allowing for easy updates without touching the frontend code.
* **Premium UI/UX:** Built with Tailwind CSS featuring glassmorphism overlays, custom gradient glows, and highly responsive Bento Box layouts.
* **Advanced Animations:** Utilizes `Framer Motion` for smooth scroll-triggered entrances and `Vanilla-Tilt.js` for tactile, 3D interactive project cards.
* **Fully Functional Contact API:** Custom Express backend secured with CORS that processes and routes incoming messages via email.
* **Automated Database Seeding:** Includes a custom `seeder.js` script to instantly wipe and rebuild the MongoDB collections.

---

## Architecture & Tech Stack

### Frontend (Client)
* **Framework:** React.js (Bootstrapped with Vite for instant server start & HMR)
* **Styling:** Tailwind CSS
* **Animations:** Framer Motion & Vanilla-Tilt.js
* **HTTP Client:** Axios
* **Notifications:** React Hot Toast
* **Icons:** React Icons (Feather & FontAwesome)

### Backend (Server)
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas & Mongoose ODM
* **Security & Config:** CORS, Dotenv

### Deployment
* **Frontend Hosting:** Vercel (Configured with `vercel.json` for client-side routing)
* **Backend Hosting:** Render (Free Tier Web Service)
* **Database Hosting:** MongoDB Atlas (Cloud Cluster)

---

## Project Showcase

This portfolio natively highlights 9 major engineering projects, demonstrating a bridge between complex AI/ML and deployable software:
1. **DocuMind:** RAG Document Intelligence Platform (FastAPI, FAISS, LangChain, Groq)
2. **ByteBrain:** AI-Powered Personalized Learning (Node.js, NLP, LLMs)
3. **AI Pitch Visualizer:** Gen-AI Storyboard Creator (Next.js, FastAPI, Llama 3.1)
4. **Twitter Sentiment Analysis:** Deep Learning NLP (TensorFlow, BiLSTM)
5. **Real-Time Face Detection:** Computer Vision (OpenCV, MTCNN)
6. ...and more across Full-Stack MERN and Data Science architectures.

---

## Local Development Setup

To run this project locally, you will need `Node.js` and a `MongoDB` cluster.

### 1. Clone the repository
```bash
git clone [https://github.com/VivekPreetham/Portfolio.git](https://github.com/VivekPreetham/Portfolio.git)
cd Portfolio

```

### 2. Install Dependencies

You need to install packages for both the client and the server.

```bash
# Install backend dependencies
cd backend
npm install

# Open a new terminal, install frontend dependencies
cd client
npm install

```

### 3. Environment Variables

Create a `.env` file in the **backend** directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
FRONTEND_URL=http://localhost:5173
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password

```

Create a `.env` file in the **client** directory:

```env
VITE_API_URL=http://localhost:5000/api

```

### 4. Seed the Database

Populate your MongoDB cluster with the featured projects data.

```bash
cd backend
node seeder.js

```

### 5. Run the Application

Start the development servers.

```bash
# In the backend directory
npm run dev

# In the client directory
npm run dev

```

The application will be available at `http://localhost:5173`.

---

## Let's Connect

* **LinkedIn:** [Vivek Preetham Mekala](https://www.google.com/search?q=https://www.linkedin.com/in/vivek-preetham-714a632a6/)
* **GitHub:** [@VivekPreetham](https://www.google.com/search?q=https://github.com/VivekPreetham)
* **Email:** [vivekpreetham12@gmail.com](https://www.google.com/search?q=mailto%3Avivekpreetham12%40gmail.com)
