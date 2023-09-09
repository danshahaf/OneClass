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

// Establish Live Sessions
// app.use(session({
//   secret: 'your-secret-key',  // TODO Function to generate unqieu IDs
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false }  // Set to true if you're using HTTPS
// }));

// MySQL Connection
const db = mysql.createConnection({
  // ------ LIVE DATABASE -----
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9643262',
  password: 'g17iN8jreY', //DO NOT DELETE THIS PLEASE -haf
  database: 'sql9643262'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL Connected...');

  // Import the registration routes after the database connection is established
  const registrationRoutes = require('./backend/registration')(db);
  app.use('/api/registration', registrationRoutes);

  const signinRoutes = require('./backend/signin')(db);
  app.use('/api/signin', signinRoutes);

  // API routes
  app.get('/getdata', (req, res) => {
    const sql = "SELECT * FROM School";
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  });

  // Use the registration routes
  

  // Catch-all route to serve the React application
  // This should be the last route defined
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
  });

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
