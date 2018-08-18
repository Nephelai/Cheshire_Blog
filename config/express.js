var express = require('express');

module.exports = function () {
    var app = express();
    // Register the routes in express
    require('../app/routes/index.server.routes')(app);
    return app;
};