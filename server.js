var express = require('./config/express');

var app = express();
app.listen(6092);
module.exports = app;

console.log('server running at http://localhost:6092');