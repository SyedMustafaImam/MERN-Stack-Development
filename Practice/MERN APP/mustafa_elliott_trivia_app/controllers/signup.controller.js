const db = require('../models/index')
var trigger;
exports.register_form = (req, res) => {
    trigger=true;
    res.render('signup', { title: "signupform",state:trigger })
}

exports.register = (req, res) => {
    trigger=true;  
    console.log(req.body)
    console.log('we are at for loop')
    db.Member.find().then(user => {
        for (i = 0; i < user.length; i++) {
            if (user[i].userid == req.body.userid) {
                trigger = false;
            }
            else{
                trigger=true;
            }
            console.log(trigger,":",user[i].userid)
        }
        console.log(trigger)
    if(trigger){
        console.log(req.body,"is acceptable")
        let reg = new db.Member({
            userid: req.body.userid,
            password: req.body.password,
            name: req.body.name,
            Gender: req.body.Gender,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
        })
        reg.save().then(result => {
            console.log("saved>>",result)
        }).catch(err => {
            console.log(err)
        }
        )
        res.redirect('/')
    }
    else{
        console.log(req.body,"not acceptable")
        res.render('signup', { title: "signupform", state:trigger })
    }
    })
    // console.log('before if statement',trigger)
    // if (trigger) {
        
    // } else {
    //     res.render('signup', { title: "signupform", state:trigger })
    // }
}

