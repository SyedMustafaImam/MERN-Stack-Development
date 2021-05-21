var express = require('express');
var router = express.Router();
var book_controller = require('../controllers/bookDashBoard.controller')
/* GET home page. */
router.get('/list-book',book_controller.book_list);
router.get('/add-book', book_controller.getBookId, book_controller.addbook);
router.post('/add-newbook', book_controller.getBookId, book_controller.addNewBook)
router.get('/update-book/:id',book_controller.update_book)
router.post('/updatebook_post', book_controller.bookupdate_post)
router.post('/delete/:id', book_controller.book_delete)
router.get('/getmember-list',book_controller.list_members)
module.exports = router;
