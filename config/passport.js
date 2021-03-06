var passport = require('passport'),
    mongoose = require('mongoose');

module.exports = function () {
    var User = mongoose.model('User');

    //Passport가 사용자 직렬화를 다루는 방식을 정의..?
    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });
    
    passport.deserializeUser(function (id, done) {
        User.findOne({
            _id: id
        }, '-password -salt', function (err, user) {
            done(err, user);
        });
    });

    require('./strategies/local')();
};