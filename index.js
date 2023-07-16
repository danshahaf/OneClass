const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => {
  res.send('Hello from the back-end!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
