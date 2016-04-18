var fs = require('fs');

function readData() {
	var filename = '';
	return fs.readFileSync(filename);
} 

function getAllStudents() {
	return JSON.parse(readData());
}

function getStudent(rollnumber) {
	var students = getAllStudents().result;

	for(var iter = 0; iter < students.length; iter++) {
		var student = students[iter];

		if(student.rollnumber == rollnumber) {
			return student;
		}
	}

	return null;
}

module.exports.getAllStudents


/*
GET	/students	Get all students
GET	/students/:roll-number	Get the student with a specified roll number
DELETE	/students/:roll-number	Delete a student with a specified roll number
GET	/courses	Get all courses that students subscribed to
DELETE	/courses/:course-name	Delete the course with a specified course name
*/