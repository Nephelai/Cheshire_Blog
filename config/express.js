var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session');

module.exports = function () {
    var app = express();

    if(process.env.NODE_ENV === 'development') {
        // morgan produce like 'GET / 304 10.152 ms - -' log
        app.use(morgan('dev'));
    } else if(process.env.NODE_ENV === 'production') {
        app.use(compress());
    }
    console.log(config.log);

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    // views folder setting
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    // Register the routes in express
    require('../app/routes/index.server.routes')(app);

    app.use(express.static('./public'));

    return app;
};