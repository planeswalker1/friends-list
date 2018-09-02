const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let friends = ['Brian', 'David', 'Jorde', 'Raf', 'Taka'];

app.get('/', function (req, res) {
  res.render('index', {friends: friends});
});

app.post('/addfriend', function (req, res) {
  let newFriend = req.body.friendName;
  friends.push(newFriend);
  res.redirect('/');
});

app.listen(PORT, function () {
  console.log('listening on ' + PORT);
});