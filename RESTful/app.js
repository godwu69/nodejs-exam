// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import routes
const studentRoutes = require('./routes/studentRoutes');

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());  // Enable CORS to allow React to communicate with the backend

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/studentDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch((error) => console.log("MongoDB connection error:", error));

// Routes
app.use('/api/students', studentRoutes);



// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
