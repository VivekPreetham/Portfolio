const Contact = require('../models/Contact');
const { validationResult } = require('express-validator');
const nodemailer = require('nodemailer');

const submitContactForm = async (req, res, next) => {
  try {
    // 1. Intercept Validation Errors from the Route
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400);
      // Map the errors into a single readable string
      throw new Error(errors.array().map(err => err.msg).join(', '));
    }

    const { name, email, subject, message } = req.body;

    // 2. Save the submission to MongoDB
    const newContact = await Contact.create({
      name,
      email,
      subject: subject || 'New Portfolio Inquiry',
      message
    });

    // 3. Configure Nodemailer SMTP Transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Construct the Email Output
    const mailOptions = {
      from: `"${name} (Portfolio)" <${process.env.EMAIL_USER}>`, // Send from your authenticated email to prevent spam blocking
      replyTo: email, // Allows you to hit "Reply" directly to the sender
      to: process.env.EMAIL_USER, // Send to yourself
      subject: `Portfolio Contact: ${subject || 'New Message'}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eaeaea; border-radius: 10px;">
          <h2 style="color: #7F77DD;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <h4 style="margin-bottom: 10px; color: #1D9E75;">Message:</h4>
          <p style="white-space: pre-wrap; line-height: 1.5; color: #333;">${message}</p>
        </div>
      `
    };

    // 5. Fire off the Email
    await transporter.sendMail(mailOptions);

    // 6. Return Success Response to Frontend
    res.status(201).json({
      success: true,
      message: 'Message sent successfully'
    });

  } catch (error) {
    // Forward any database or SMTP errors to your global errorHandler
    next(error); 
  }
};

module.exports = { submitContactForm };