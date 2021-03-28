var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', async function (req, res, next) {

	const heads = await db.Head.find().sort({ hid: 1});
	const grades = await db.Grade.find().sort({ gradeid: 1 });

	db.Student.aggregate([
		{
			$lookup: {
				from: 'marks',
				localField: 'regno',
				foreignField: 'regno',
				as: 'scores'
			}
		},
	])
	.then(students => {
		console.log(JSON.stringify(students, null, '  '));
		res.render('index', { 
			title: 'Recap Sheet', 
			students: students, 
			heads: heads, 
			grades: grades 
		});
	})
});




module.exports = router;
