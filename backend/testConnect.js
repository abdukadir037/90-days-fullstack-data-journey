const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI)
// mongoose.connect('mongodb://localhost:27017/?directConnection=true')
.then(() => console.log('✅ Connected to local MongoDB!'))
.catch(err => console.error('❌ Connection failed:', err.message));
