exports.home = (req, res) => {
    res.render('index', { title: 'Home' });
    res.end();
}

exports.about = (req, res) => {
    res.render('index', { title: 'About' });
    res.end();
}

exports.profile = (req, res) => {
    res.render('index', { title: 'Profile' });
    res.end();
}