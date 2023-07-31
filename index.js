const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 1707;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// MySQL Connection
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Sdan3189',
  database: 'theboard'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// API routes


app.get('/getdata', (req, res) => {
  const sql = "SELECT * FROM School";
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Check if email exists in the Student table
app.post('/api/check-email', (req, res) => {
  const { email } = req.body;

  const sql = `
      SELECT Student.Email, School.Domain
      FROM Student
      JOIN School ON Student.School_ID = School.ID
      WHERE CONCAT(Student.email, '@', School.Domain) = ?;
  `;

  db.query(sql, [email], (err, results) => {
      if (err) {
          console.error("Error during DB query:", err); // Log the error
          res.status(500).json({ error: err.message }); // Send the error message to client
          return;
      }

      if (results && results.length > 0) {
          res.json({ exists: true });
      } else {
        res.json({ exists: false, message: "Email not recognized by the system." });
      }
  });
});





app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Catch-all route to serve the React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});
