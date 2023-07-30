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



// ------ SQL and DATABASE functionality -----
const mysql = require('mysql2');

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sdan3189',
  database: 'theboard'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.get('/getdata', (req, res) => {
  const sql = "SELECT * FROM School";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

