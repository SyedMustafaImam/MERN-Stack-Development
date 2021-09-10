const mongoose = require('mongoose');
const {Schema} = mongoose

const User = new Schema({

    userName:{
        type: 'string',
        required: true
    },
    firstName:{
        type: 'string',
        required: true
    }, 
    lastName:{
            type: 'string',
            required: true
        }
    , 
    email:{
            type: 'string',
            required: true
        }
        , 
    password:{
            type: 'string',
            required: true
        }
    // ,
    // timestamps: true    
});

module.exports =  mongoose.model('User', User )