// backend/index.js

const express = require('express');
const bodyParserPackage = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv').config();

const { json } = bodyParserPackage;
const port = process.env.PORT;

const app = express();

// Middleware
app.use(json());
app.use(cors());

// Routes
app.use('/api', require('./routes/api.js'));

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
