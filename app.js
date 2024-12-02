const express = require('express');

const app = express();
const PORT = 3000;

// Middleware for JSON parsing
app.use(express.json()); // `bodyParser` is now built into Express

// In-memory storage
const expenses = [];

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Use backticks for string interpolation
});
