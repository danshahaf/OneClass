const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static assets
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// API route example
app.get('/api', (req, res) => {
  res.json({ message: 'Hello, API!' });
});

// Catch-all route to serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
