var express = require('express');
var router = express.Router();

var studentsModel= require('../models/students.js');

router.get('/', function(req, res, next) {
	res.json(studentsModel.getStudents());  
});

module.exports = router;
