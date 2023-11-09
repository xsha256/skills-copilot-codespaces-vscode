// Create web server
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use bodyParser middleware to parse JSON requests
app.use(bodyParser.json());

// Array to store comments
const comments = [];

// Serve HTML form for submitting comments
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// API endpoint to get all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// API endpoint to add a new comment
app.post('/comments', (req, res) => {
  const newComment = req.body;
  comments.push(newComment);
  res.json(newComment);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
git add comments.js