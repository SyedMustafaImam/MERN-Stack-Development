const db = require('../models/index')
const bcrypt = require('bcryptjs');
var status = ' ';


exports.login_form = (req, res) => {
    console.log('before if state', status)
    // console.log(req.session.user.username)
    res.cookie('jwtoken', 'login Page')
    if (status == null) {
        console.log('if status', status)
        res.render('login', { title: "Login", flag: status })
    } else {
        status = ' '
        console.log('status', status)
        res.render('login', { title: "Login", flag: status })
    }


    status = ' ';
}


exports.loginchk = async (req, res) => {
    const { username, password } = req.body;
    console.log(`${username} <=> ${password}`);
    try {
        if (!username || !password) {
            res.status(404).json({ error: 'Please enter all the credentials' })
        } else {

            const userLogin = await db.Users.findOne({ username: username });
            // console.log(userLogin);

            if (userLogin) {
                const isMatch = await bcrypt.compare(password, userLogin.password)
                // console.log(isMatch)
                const token = await userLogin.generateAuthToken();
                console.log(`token => ${token}`)

                // storing token in cookie 
                res.cookie('jwttoken', token, {
                    expires: new Date(Date.now() + 250000),
                    httpOnly: true
                })

                if (!isMatch) {
                    res.status(400).json({ error: "Invalid Credientials" });
                    console.log('invalid credentials')
                } else {
                    // If Every this matched

                    req.session.user = userLogin;
                    console.log("Session", req.session.user)
                    // res.redirect('index/member/' + req.session.user.username)
                    return res.status(200).json({ logedin_to: `/index/member/${req.session.user.username}` })

                    // res.status(200).json({ message: "loged in Successfully" });

                }

            } else {
                res.status(400).json({ error: "Invalid Credientials" });
                console.log('invalid credentials')
            }


            // if (userLogin) {

            //     if (!isMatch) {
            //     }
            //     else {
            //         res.json({ message: "user Signin Successfully" });
            //     }
            // }




            // db.Users.findOne({ username: username, password: password }, (err, user) => {
            //     if (user) {
            //         console.log("User", user)
            //         // req.session.user= user;
            //         // console.log("Session",req.session)
            //         if (user === null) {
            //             // res.end('User does not exist')
            //             return res.status(400).json({ incorrect: `Credintials are not correct` })
            //         }
            //         else if (user.username === username && user.password === password) {
            //             status = ' '
            //             console.log('got here to members')
            //             req.session.user = user;
            //             console.log("Session", req.session.user)
            //             console.log(req.session.user.username, "/", req.session.user.password)
            //             // res.redirect('index/member/' + req.session.user.username)
            //             return res.status(200).json({ logedin_to: `/index/member/${req.session.user.username}` })

            //         } else {
            //             return res.status(400).json({ incorrect: `Credintials are not correct` })
            //         }
            //     } else {
            //         console.log('got here user undefined')
            //         console.log(err)
            //         console.log(user)
            //         status = user;
            //         // res.redirect('/')
            //         return res.status(400).json({ incorrect: `Credintials are not correct` })

            //     }
            // })
        }
    } catch (err) {
        console.log('got here')
        console.log(err)
        res.redirect("/")
    }
}


exports.edit_profile = (req, res) => {
    console.log(req.params.username);
    db.Member.findOne({ username: req.params.username }).then(users => {
        console.log(users)
        console.log('edit_profile form')
        res.render('edit-profile', { title: 'Edit-Profile', session: users })
    }).catch(err => console.log(err))
}


exports.edited_profile = async (req, res) => {
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.params.username)
    await db.Member.updateOne({ username: req.params.username }, { $set: req.body }).then(result => {
        console.log('part where update is done ')
        console.log(result)
        res.redirect('/index/member/' + req.body.username)
    }).catch(err => console.log(err))
}


exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log('Destroying session');
        }
        res.redirect('/')
    });
}


exports.change_password_form = (req, res) => {
    console.log(req.session.user)
    res.render('Passwordform', { title: 'ChangePassword', session: req.session.user })
}


exports.changed_password = (req, res) => {
    console.log(req.body)
    console.log(req.params.username)
    if (req.body.newpassword === req.body.confirmpassword) {
        db.Member.findOneAndUpdate({ username: req.params.username, password: req.body.oldpassword }, { $set: { password: req.body.newpassword } }).then(user => {
            console.log(user)
            res.redirect('/index/member/' + user.username)
        })
    } else {
        res.render('error')
    }

}
