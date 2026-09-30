const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const records = [
  { id: 1, name: 'Record One' },
  { id: 2, name: 'Record Two' },
  { id: 3, name: 'Record Three' },
  { id: 4, name: 'Record Four' },
  { id: 5, name: 'Record Five' },
];

app.get('/api/records', (req, res) => {
  res.json(records);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});