var User = require('mongoose').model('User'),
    passport = require('passport'),
    winston = require('../../config/winston'),
    logger = winston();

var getErrorMessage = function (err) {
    var message = '';

    if(err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
                break;
        }
    } else {
        for(var errName in err.errors) {
            if(err.errors[errName].message) message = err.errors[errName].message;
        }
    }

    return message;
};

exports.renderSignin = function (req, res, next) {
    if(!req.user) {
        logger.info('Open Sign in Form');
        res.render('signin', {
            title: 'Sign-in Form',
            messages: req.flash('error') || req.flash('info')
            // in HTML(ejs) Class 'flash' connected this.
        });
    } else return res.redirect('/');
};

exports.renderSignup = function (req, res, next) {
    if(!req.user) {
        logger.info('Open Sign up Form');
        res.render('signup', {
            title: 'Sign-up Form',
            messages: req.flash('error')
        });
    } else return res.redirect('/');
};

exports.signup = function (req, res, next) {
    if(!req.user) {
        var user = new User(req.body);
        var message = null;

        user.provider = 'local';
        user.save(function(err) {
            if(err) {
                message = getErrorMessage(err);

                logger.error(message);
                req.flash('error', message);
                return res.redirect('/signup');
            }
            logger.info('Successfully Signup');
            req.login(user, function (err) {
                if(err) return next(err);
                return res.redirect('/');
            });
        });
    } else {
        return res.redirect('/');
    }
};

exports.signout = function (req, res) {
    req.logout();
    logger.info('Successfully Logout');
    res.redirect('/');
};

exports.list = function (req, res, next) {
    User.find({}, function (err, users) {
        if(err) return next(err);
        else res.json(users);
    });
};

exports.delete = function (req, res, next) {
    req.user.remove(function (err) {
        if(err) return next(err);
        else res.json(req.user);
    });
};