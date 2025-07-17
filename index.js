require('dotenv').config(); // Load env variables

const express = require('express');
const cors = require('cors');
const app = express();

// Import routes
const authRoutes = require('./routes/authRoutes');
const scholarshipRoutes = require('./routes/scholarshipRoutes');

// Konfigurasi Port & Host dari .env atau default
const PORT = process.env.PORT || 3100;
const HOST = process.env.HOST || 'localhost';

// Middleware
app.use(cors());
app.use(express.json());

// Swagger Docs
require('./swagger')(app);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/scholarships', scholarshipRoutes);

// Root Endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to ScholarMatch API!' });
});

// Jalankan server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\nScholarMatch API running!`);
  console.log(`Local Access:  http://localhost:${PORT}`);
  console.log(`Public Access: http://${HOST}:${PORT}`);
  console.log(`Swagger Docs:  http://${HOST}:${PORT}/api-docs\n`);
});