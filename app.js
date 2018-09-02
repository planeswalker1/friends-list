const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
let friends = ['Brian', 'David', 'Jorde', 'Raf', 'Taka'];

app.get('/', function (req, res) {
  res.render('index', {friends: friends});
});

app.listen(PORT, function () {
  console.log('listening on ' + PORT);
});