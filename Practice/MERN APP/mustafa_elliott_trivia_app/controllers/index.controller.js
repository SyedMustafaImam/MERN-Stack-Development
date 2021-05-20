const db = require('../models/index')
exports.admin = (req, res) => {

    console.log("we got here")
    console.log(req.session)
    console.log(req.session.user)

    if (req.session.user) {
        console.log('we got to the admin part')
        res.render('admin', {
            title: "Admin",
            session: req.session.user,
        })
    } else {
        res.redirect('/')
    }

}

exports.member = (req, res) => {
    console.log("Parameter", req.params)
    console.log("we got here")
    console.log(req.session.user)
    if (req.session.user) {
        db.Member.findOne({ userid: req.params.userid }).then(result => {
            console.log(result)
            res.render('member', {
                title: "member",
                session: result,
            })
        })
    } else {
        res.redirect('/')
    }
}



exports.error = (req, res) => {

    res.render('error', {
        title: "Error"
    })

}