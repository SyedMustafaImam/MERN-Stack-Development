const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

let Users = new Schema({
    firstName: { type: String, required: true, max: 10 },
    lastName: { type: String, required: true, max: 10 },
    username: { type: String, required: true, max: 10 },
    country: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    tokens: [
        {
            token: { type: String, required: true }
        }
    ]
});
// hashing password
Users.pre('save', async function (next) {
    console.log(`hi from inside hash`)
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

// Generating token
Users.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err)
    }
}

module.exports = mongoose.model('Users', Users);