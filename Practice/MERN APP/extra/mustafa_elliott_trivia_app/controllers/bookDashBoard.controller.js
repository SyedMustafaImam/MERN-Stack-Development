const { Book } = require('../models/index');
const db = require('../models/index');
const { member } = require('./index.controller');

let bookid = 0;


exports.getBookId = (req, res, next) => {
    db.Book.find().limit(1).sort({ $natural: -1 }).then(result => {
        console.log('book id from db>>', result[0].bookid);
        if (result == null) {
            bookid = 1;
            console.log('null bookid', result);
        } else {
            console.log(result[0].bookid);
            bookid = result[0].bookid + 1;
            next()
        }
    }).catch(err => {
        console.log(err)
    })
}

exports.addbook = (req, res) => {
    res.render('add-book', { title: 'Add Book', bookid: bookid });
}


exports.addNewBook = async function (req, res, next) {
    console.log('req.body >> ', req.body);
    console.log('bookId = ', bookid);
    let book = new db.Book({
        bookid: bookid,
        name: req.body.name,
        author: req.body.author,
        year: req.body.year
    });

    await book.save().then(result => {
        console.log('Saved in db >> ', result);
        res.redirect('/admin/list-book')
    }).catch(err => console.log(err))

}


exports.book_list = function (req, res) {
    console.log('we got to book')
    Book.find().then(book => {
        console.log(book)
        res.render('list-books', { title: "Book List", books: book });
    })
};

exports.book_delete = async function (req, res) {
    await Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.redirect('/admin/list-book');
    })
};

exports.update_book = function (req, res) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        console.log('we are at update')
        console.log('we have', book)
        res.render('update-books', { title: "Update Book", books: book });
    })
};

exports.bookupdate_post = function (req, res) {
    console.log(req.body)
    Book.findOneAndUpdate({ bookid: req.body.bookid }, { $set: req.body }).then(book => {
        console.log(book)
        console.log('Updated Book')
        res.redirect('/admin/list-book')
    }).catch(err => console.log(err))
};
exports.list_members =  async function (req, res) {
    await db.Member.find().then(members => {
        console.log(members)
        res.render('listmembers', { title: "List Members", members: members })
    }).catch(err => console.log(err))
}