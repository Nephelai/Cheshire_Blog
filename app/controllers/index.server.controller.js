exports.render = function (req, res) {
    if(req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }
    req.session.lastVisit = new Date();

    //res.send('Hello Cheshire!');
    // Used render. how about json.
    res.render('index', {
        title: 'Hello Cheshire'
    })
    //Only work render.
};