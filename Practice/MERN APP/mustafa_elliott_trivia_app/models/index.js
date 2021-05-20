let mongoose = require('mongoose');


module.exports = {
    Book: require('./book.model'),
    Issuance: require('./issuance.model'),
    Member:require('./member.model')
}