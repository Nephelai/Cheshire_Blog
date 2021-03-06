var winston = require('../../config/winston'),
    logger = winston();

exports.render = function (req, res) {
    if(req.session.lastVisit) {
        logger.info(req.session.lastVisit);
    }
    else {
        var ip = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;

        if(ip.length >= 15) {
            var nyIP = ip.slice(7);
            ip = nyIP;
        }

        logger.info(ip);
    }
    req.session.lastVisit = new Date();

    //res.send('Hello Cheshire!');
    // Used render. how about json.
    res.render('index', {
        title: 'Hello Cheshire',
        userName: req.user ? req.user.username : ''
    })
    //Only work render.
};