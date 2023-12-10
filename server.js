const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, world!');
});


// Start the server
const port = 5500;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
