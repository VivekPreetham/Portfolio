const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { submitContactForm } = require('../controllers/contactController');

// POST /api/contact
router.post('/', [
  // Input Validation & Sanitization Pipeline
  check('name', 'Name is required').not().isEmpty().trim().escape(),
  check('email', 'Please include a valid email').isEmail().normalizeEmail(),
  check('subject').optional().trim().escape(),
  check('message', 'Message must be at least 10 characters').isLength({ min: 10 }).trim().escape()
], submitContactForm);

module.exports = router;