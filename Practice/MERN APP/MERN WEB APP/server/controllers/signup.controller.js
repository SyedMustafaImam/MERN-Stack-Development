const db = require('../models/index')
var trigger;
exports.register_form = (req, res) => {
    trigger = true;
    res.render('signup', { title: "signupform", state: trigger })
}


exports.register = (req, res) => {
    let { firstName, lastName, username, country, email, password, gender } = req.body;
    if (!firstName || !lastName || !username || !country || !email || !password || !gender) {
        res.status(422).json({ error: "All feilds not filled" })
    } else {
        db.Users.findOne({ username: req.body.username, email: email }, (err, exists) => {
            if (exists) {
                console.log(username, "Username not acceptable")
                // res.end("User name Alread exists")
                return res.status(422).json({ error: "First User Name already exists" })
            } else {
                // console.log(req.body, "is acceptable")
                res.json({ message: req.body })
                let reg = new db.Users({
                    firstName,
                    lastName,
                    username,
                    country,
                    email,
                    password,
                    gender
                })
 
 
                reg.save().then(result => {
                    // res.status(201).json({ message: "User registerd Successfully" })
                    console.log("saved to Mongo>>", result)
                }).catch(err => {
                    console.log(err)
                    res.status(500).json({ message: "Failed to register" })
                }
                )
                // res.redirect('/')
            }
        }).then((exists) => {
        }).catch(err => console.log(err))
    }
}

