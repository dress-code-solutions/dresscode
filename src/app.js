// http://appdividend.com/2017/06/18/node-js-express-tutorial/
// app.js

var express = require('express');

var app = express();
var port = 3000;

var itemRouter = require('./src/routes/itemRoutes');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/items', itemRouter);

app.listen(port, function () {
  console.log('Server is running on port:', port);
});

app.get('/', function (req, res) {
  res.render('index');
});