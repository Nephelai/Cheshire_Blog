var config = require('./config'),
    express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport');

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

    // set passport
    // Using express session to track users
    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    // Register the routes in express
    require('../app/routes/index.server.routes')(app);
    require('../app/routes/users.server.routes')(app);

    app.use(express.static('./public'));

    return app;
};