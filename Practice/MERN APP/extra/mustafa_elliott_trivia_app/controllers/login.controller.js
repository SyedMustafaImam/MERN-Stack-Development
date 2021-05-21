const db = require('../models/index')
var status=' ';
exports.login_form = (req, res) => {
    console.log('before if state',status)
    // console.log(req.session.user.userid)
    if(status==null){
        console.log('if status',status)
        res.render('login', { title: "Login", flag: status })
    }else{
        status = ' '
        console.log('status',status)
        res.render('login', { title: "Login", flag: status})
    }
    status=' ';
}
exports.loginchk = (req, res) => {
    console.log(req.body)
    const { userid, password } = req.body;
    console.log(userid, "/", password);
    try {
        db.Member.findOne({ userid: userid, password: password }, (err, user) => {
            if (user) {
                console.log("User", user)
                // req.session.user= user;
                // console.log("Session",req.session)
                console.log(user.userid, "/", user.password)
                if (user.userid === 'admin') {
                    status = ' '
                    console.log('admin here')
                    req.session.user = user;
                    console.log("Session", req.session.user)
                    console.log(req.session.userid, "/", req.session.password)
                    res.redirect('index/admin')
                }
                else if (user === null) {
                    res.end('User does not exist')
                }
                else if (user.userid === userid && user.password === password) {
                    status = ' '
                    console.log('got here to members')
                    req.session.user = user;
                    console.log("Session", req.session.user)
                    console.log(req.session.user.userid, "/", req.session.user.password)
                    res.redirect('index/member/' + req.session.user.userid)
                } else {
                    res.render('error');
                }
            } else {
                console.log('got here user undefined')
                console.log(err)
                console.log(user)
                status = user;
                res.redirect('/')
            }
        })
    } catch (err) {
        console.log('got here')
        console.log(err)
        res.redirect("/")
    }
}
exports.edit_profile = (req, res) => {
    console.log(req.params.userid);
    db.Member.findOne({ userid: req.params.userid }).then(users => {
        console.log(users)
        console.log('edit_profile form')
        res.render('edit-profile', { title: 'Edit-Profile', session: users })
    }).catch(err => console.log(err))
}
exports.edited_profile = async (req, res) => {
    console.log(req.body)
    console.log(req.body.name)
    console.log(req.params.userid)
    await db.Member.updateOne({ userid: req.params.userid }, { $set: req.body }).then(result => {
        console.log('part where update is done ')
        console.log(result)
        res.redirect('/index/member/' + req.body.userid)
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
// exports.redirectLogin=(req,res)=>{
//     console.log(req.session.username)
//     if(req.session.username){
//         console.log('got here')
//         db.Member.findOne({name:req.session.username}).then(user=>{
//             console.log('findone done')
//             console.log(user)
//             console.log(user.name)
//             console.log(req.session)
//             res.render('member', { title: 'MEMBERS', session: req.session, user: user })
//         })

//     }else{
//         console.log(err)
//     }
// }
exports.change_password_form = (req, res) => {
    console.log(req.session.user)
    res.render('Passwordform', { title: 'ChangePassword', session: req.session.user })
}
exports.changed_password = (req, res) => {
    console.log(req.body)
    console.log(req.params.userid)
    if (req.body.newpassword === req.body.confirmpassword) {
        db.Member.findOneAndUpdate({ userid: req.params.userid, password: req.body.oldpassword }, { $set: { password: req.body.newpassword } }).then(user => {
            console.log(user)
            res.redirect('/index/member/' + user.userid)
        })
    } else {
        res.render('error')
    }

}
