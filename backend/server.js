
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();
const PORT = 5000

app.use(cors())
app.use(express.json())


connectDB();

// ✅ Add these lines
const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

const todoRoutes = require('./routes/todos');
app.use('/api/todos', todoRoutes);

// ✅ Optional: health check route
app.get('/api', (req, res) => {
  res.send('API is running ✅');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))