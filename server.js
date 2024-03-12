const express = require('express');
var path = require('path');
const port = 8000;

const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/styles.css', (req, res) => {
    res.sendFile(__dirname + '/public/css/styles.css');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use(express.static(path.join(__dirname, 'public')));