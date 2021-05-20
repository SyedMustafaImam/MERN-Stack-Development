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
    console.log('Session Username=>', req.session.user.username)
    if (req.session.user) {
        db.Users.findOne({ username: req.session.user.username }).then(result => {
            console.log(result)
            // res.render('member', {
            //     title: "member",
            //     session: result,
            // })
            res.send(`Welcome ${req.session.user.username}`)
            // return res.status(200).json({ logedin_to: `/index/member/${req.session.user.username}` })
        }).catch(err => { console.log(`Error in Member DB ==> ${err}`) })
    } else {
        return res.status(200).json({ error: `Not Login please visit /login` })

        // res.redirect('/')
    }
}



exports.error = (req, res) => {

    res.render('error', {
        title: "Error"
    })

}