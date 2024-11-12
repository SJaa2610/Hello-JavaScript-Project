const express = require('express');
const app = express();

// Poor defect
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hi, I am Sarahi. This is my JavaScript project');
});

app.listen(port, () => {
  console.log(`Port listening : ${port}`);
}); 


