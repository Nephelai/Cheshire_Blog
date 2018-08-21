// process.env.NODE_ENV is not setting. then set 'development'
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express'),
    mongoose = require('./config/mongoose'),
    passport = require('./config/passport'),
    winston = require('./config/winston');

var db = mongoose();
var app = express();
var passport = passport();
var logger = winston();

app.listen(6092);
module.exports = app;

logger.info('server running at http://localhost:6092');