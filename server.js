// process.env.NODE_ENV is not setting. then set 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    mongoose = require('./config/mongoose');

var db = mongoose();
var app = express();
app.listen(6092);
module.exports = app;

console.log('server running at http://localhost:6092');