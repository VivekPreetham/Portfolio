require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorHandler');

// Initialize Database Connection
connectDB();

const app = express();

// 1. CRITICAL FOR DEPLOYMENT: Trust the reverse proxy headers (Render, Railway, AWS, etc.)
// Without this, express-rate-limit will block ALL users when one user triggers it.
app.set('trust proxy', 1);

// Security Middleware
app.use(helmet());

// 2. BULLETPROOF CORS CONFIGURATION
// Explicitly falls back to local Vite development port if the env variable isn't read cleanly
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
  optionsSuccessStatus: 200
}));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting (Spam Prevention)
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, 
  message: { success: false, message: "Too many requests from this IP, please try again after 15 minutes." },
  standardHeaders: true,
  legacyHeaders: false,
});

// --- API ROUTES ---

// Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'MERN Portfolio API is running smoothly...' });
});

// Route mapping
app.use('/api/contact', contactLimiter, require('./routes/contactRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));

// 3. FALLBACK FOR UNHANDLED ROUTES
// Prevents frontend jank if an incorrect endpoint is targeted by returning standard JSON
app.use((req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// --- ERROR HANDLING ---
app.use(errorHandler);

// --- SERVER INITIALIZATION ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});