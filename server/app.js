const express = require('express');
const path = require('path');
const cors = require('cors');
const session = require('express-session');

const landingRoutes = require('./routes/landing');  // Import landing page routes
const authRoutes = require('./routes/authRoutes');  // Import auth routes for login and logout
const adminRoutes = require('./routes/adminRoutes'); // Import admin apis
const clubRoutes = require('./routes/clubRoutes'); // Import club routes
const eventRoutes = require('./routes/eventRoutes'); // Import event routes

// Initialize the Express app
const app = express();

// Load environment variables from .env file
require('dotenv').config();

// Middleware
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your frontend's origin
    credentials: true, // Allow cookies
  })
);
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Session Middleware
app.use(session({
  secret: process.env.SESSION_SECRET, // A secret key for signing the session ID cookie
  resave: process.env.RESAVE, // Don't save session if unmodified
  saveUninitialized: process.env.SAVE_UNINITIALIZED, // Don't create a session until something is stored
  cookie: { secure: process.env.COOKIES_SECURE,  sameSite: 'Lax', httpOnly: true } // Set true if using HTTPS
}));

const keepUserLoggedIn = require('./middleware/keepUserLoggedIn');
app.use(keepUserLoggedIn);

// API Routes
app.use('/api/landing', landingRoutes);  // Routes for fetching updates and statistics
app.use('/api/auth', authRoutes); // Use auth routes
app.use('/api/admin', adminRoutes); // Use admin routes
app.use('/api/club', clubRoutes); // Use club routes
app.use('/api/event', eventRoutes); // Use event routes

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// Catch-all handler to serve React's index.html for unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Export the app module to use in server.js
module.exports = app;
