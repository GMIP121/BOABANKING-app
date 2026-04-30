const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Set up Express app
const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/bank-transfer-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error: ', err));

// Routes
app.use('/auth', require('./routes/auth')); // Authentication routes
app.use('/accounts', require('./routes/accounts')); // Account routes
app.use('/transfers', require('./routes/transfers')); // Transfer routes
app.use('/notifications', require('./routes/notifications')); // Notification routes

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
