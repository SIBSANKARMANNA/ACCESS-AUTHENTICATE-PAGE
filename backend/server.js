const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const ConnectDB=require('./config/db');
const cors=require('cors');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

app.use(cors());

// Connect to MongoDB
ConnectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
