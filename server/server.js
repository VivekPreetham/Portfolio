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

// Security Middleware: Protects against well-known web vulnerabilities by setting HTTP headers
app.use(helmet());

// Cross-Origin Resource Sharing: Only allow requests from your specific frontend URL
app.use(cors({
  origin: process.env.CLIENT_URL,
  credentials: true,
}));

// Body Parser Middleware: Allows Express to accept JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rate Limiting: Prevents spam (Max 5 requests per 15 minutes per IP)
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
  res.send('MERN Portfolio API is running...');
});

// Rate limited contact route mapping
app.use('/api/contact', contactLimiter, require('./routes/contactRoutes'));

app.use('/api/projects', require('./routes/projectRoutes'));


// --- ERROR HANDLING ---
app.use(errorHandler);


// --- SERVER INITIALIZATION ---
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
  
});